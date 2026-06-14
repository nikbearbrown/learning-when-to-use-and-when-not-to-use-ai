// cajal-svg-gen.mjs
// Deterministic SVG renderer for CAJAL figure specs.
// Reads a JSON array of figure specs, emits style-guide-compliant static SVGs to images/.
// Usage: node SCRIPTS/cajal-svg-gen.mjs <specs.json> [manifest-out.json]
// Collision-safe: skips a figure if its .svg OR .png already exists.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// ----- Book metadata (from metadata.yaml) -----
const BOOK_TITLE = 'Visible Learning x AI';
const BOOK_SLUG  = 'visible-learning-x-ai';
const AUTHOR     = 'Nik Bear Brown';
const DATE_GEN   = '2026-06-08';

// ----- Palette (embedded Brutalist SVG Style Guide) -----
const C = {
  white: '#FFFFFF', ink: '#2a1a0e', red: '#C8102E', secondary: '#545454',
  border: '#D4D4D4', ochre: '#C8860E', fill: '#F5F5F5',
  gray1: '#787878', gray2: '#ADADAD',
};
// Fonts
const F = {
  title: "'EB Garamond','Garamond',Georgia,serif",
  body: "'Inter',-apple-system,'Helvetica Neue',sans-serif",
  mono: "'JetBrains Mono','Fira Code','Courier New',monospace",
};

const VBW = 700;          // viewBox width (fixed)
const MARGIN = 32;        // page margin

// ---------- helpers ----------
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const trunc = (s, n) => { s = String(s ?? ''); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
const slug = (s) => String(s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);

function text(x, y, str, { font = F.body, size = 12, fill = C.ink, weight = 400, anchor = 'start', spacing = null } = {}) {
  const ls = spacing ? ` letter-spacing="${spacing}"` : '';
  return `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${ls}>${esc(str)}</text>`;
}
// word-wrap into <= maxChars lines, max `maxLines`
function wrap(str, maxChars, maxLines = 3) {
  const words = String(str ?? '').split(/\s+/).filter(Boolean);
  const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length <= maxChars) cur = (cur + ' ' + w).trim();
    else { if (cur) lines.push(cur); cur = w; }
    if (lines.length === maxLines - 1 && cur.length > maxChars) { /* allow last line longer */ }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const keep = lines.slice(0, maxLines);
    keep[maxLines - 1] = trunc(keep[maxLines - 1] + '…', maxChars + 2);
    return keep;
  }
  return lines;
}
function multiline(x, y, str, opts = {}) {
  const { maxChars = 24, maxLines = 3, lh = 14, anchor = 'middle', ...rest } = opts;
  const lines = wrap(str, maxChars, maxLines);
  // Vertically center the wrapped block around y so multi-line labels never
  // overflow the bottom of their containing box.
  const startY = y - ((lines.length - 1) * lh) / 2;
  return lines.map((ln, i) => text(x, startY + i * lh, ln, { anchor, ...rest })).join('');
}

// nice axis max
function niceMax(v) {
  if (v <= 0) return 1;
  const steps = [0.2, 0.25, 0.4, 0.5, 0.6, 0.8, 1, 1.2, 1.5, 1.6, 2, 2.5, 3, 4, 5];
  for (const s of steps) if (v <= s) return s;
  return Math.ceil(v);
}

// ---------- frame ----------
function frame(spec, innerSVG, height) {
  const NN = String(spec.figureNumber).padStart(2, '0');
  const id = `fig-title-${NN}`;
  const title = trunc(spec.figureTitle, 80);
  const desc = trunc(spec.desc || spec.figureTitle, 280);
  const comment =
`<!--
  ${title}
  Book: ${BOOK_TITLE}
  Chapter: ${spec.chapterSlug}
  Figure: ${NN}
  Type: ${spec.figureType}
  Generated: ${DATE_GEN}
  Source: pantry/${spec.chapterSlug}-cajal.md
-->`;
  const metadata =
`<title id="${id}">${esc(title)} — ${esc(spec.chapterSlug)}</title>
<desc>${esc(desc)}</desc>
<metadata>
  <cajal:figure
    xmlns:cajal="https://bearbrown.ai/cajal/1.0"
    book="${esc(BOOK_TITLE)}"
    book-slug="${BOOK_SLUG}"
    chapter="${esc(spec.chapterSlug)}"
    figure-number="${NN}"
    figure-title="${esc(title)}"
    figure-slug="${esc(spec.figureSlug)}"
    figure-type="${esc(spec.figureType)}"
    priority="${esc(spec.priority || 'unranked')}"
    author="${esc(AUTHOR)}"
    date-generated="${DATE_GEN}"
    source-file="pantry/${spec.chapterSlug}-cajal.md"
  />
</metadata>`;
  const defs =
`<defs>
  <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="${C.ink}"/>
  </marker>
</defs>`;
  return `${comment}
<svg viewBox="0 0 ${VBW} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="${id}">
${metadata}
${defs}
<rect x="0" y="0" width="${VBW}" height="${height}" fill="${C.white}"/>
${innerSVG}
</svg>
`;
}

// header (title + subtitle) returns {markup, y} where y is baseline of content start
function header(spec, x = MARGIN, top = 30) {
  let m = text(x, top, trunc(spec.figureTitle, 70), { font: F.title, size: 14, fill: C.ink });
  let y = top;
  if (spec.subtitle) { y += 17; m += text(x, y, trunc(spec.subtitle, 95), { font: F.body, size: 11, fill: C.secondary }); }
  return { markup: m, y };
}
// optional external source line at bottom (only if spec.source provided)
function sourceLine(spec, height) {
  if (!spec.source) return '';
  return text(MARGIN, height - 14, String(spec.source).toUpperCase(), { font: F.body, size: 10, fill: C.secondary, spacing: '0.08em' });
}

// ---------- renderers ----------
function rBar(spec) {
  const d = spec.data || {};
  const items = (d.items || []).slice(0, 8);
  const m = { top: 64, right: 40, bottom: 64, left: 64 };
  const height = 420;
  const plotW = VBW - m.left - m.right;
  const plotH = height - m.top - m.bottom;
  const vals = items.map(i => Math.abs(Number(i.value) || 0));
  const ymax = niceMax(Math.max(d.yMax || 0, d.baseline || 0, ...vals, 0.0001));
  const ymin = Math.min(0, ...items.map(i => Number(i.value) || 0));
  const yspan = ymax - Math.min(0, ymin);
  const y0 = (v) => m.top + plotH - ((v - Math.min(0, ymin)) / yspan) * plotH;
  let g = '';
  g += `<rect x="${m.left}" y="${m.top}" width="${plotW}" height="${plotH}" fill="${C.fill}" stroke="${C.border}" stroke-width="0.75"/>`;
  // y gridlines/ticks (0, baseline, max)
  const ticks = [0, ymax]; if (ymin < 0) ticks.push(Math.min(0, ymin));
  for (const t of ticks) {
    const yy = y0(t);
    g += `<line x1="${m.left}" y1="${yy}" x2="${m.left + plotW}" y2="${yy}" stroke="${C.border}" stroke-width="0.75" stroke-dasharray="4 3"/>`;
    g += text(m.left - 8, yy + 4, (Math.round(t * 100) / 100).toString(), { font: F.mono, size: 11, fill: C.secondary, anchor: 'end' });
  }
  // baseline reference
  if (d.baseline != null) {
    const yy = y0(d.baseline);
    g += `<line x1="${m.left}" y1="${yy}" x2="${m.left + plotW}" y2="${yy}" stroke="${C.ink}" stroke-width="0.75" stroke-dasharray="5 4"/>`;
    g += text(m.left + plotW, yy - 5, trunc(d.baselineLabel || `baseline ${d.baseline}`, 36), { font: F.body, size: 11, fill: C.secondary, anchor: 'end' });
  }
  const n = items.length || 1;
  const bw = Math.min(64, (plotW / n) * 0.6);
  const step = plotW / n;
  items.forEach((it, i) => {
    const cx = m.left + step * (i + 0.5);
    const v = Number(it.value) || 0;
    const top = y0(Math.max(v, 0)); const base = y0(Math.min(v, 0));
    const h = Math.max(1, Math.abs(base - top));
    const fill = it.highlight ? C.red : (i % 2 ? C.gray1 : C.ink);
    g += `<rect x="${cx - bw / 2}" y="${top}" width="${bw}" height="${h}" fill="${fill}" rx="0"/>`;
    g += text(cx, top - 6, (Math.round(v * 100) / 100).toString(), { font: F.mono, size: 11, fill: C.ink, anchor: 'middle' });
    g += multiline(cx, m.top + plotH + 16, it.label, { maxChars: 14, maxLines: 2, lh: 12, anchor: 'middle', font: F.body, size: 11, fill: C.ink });
  });
  if (d.unit) g += text(MARGIN, height - 14, trunc(d.unit, 60), { font: F.body, size: 11, fill: C.secondary });
  return { inner: header(spec).markup + g, height };
}

function rDot(spec) {
  const d = spec.data || {};
  const items = (d.items || []).slice(0, 8);
  const m = { top: 64, right: 56, bottom: 56, left: 170 };
  const rows = items.length || 1;
  const height = Math.max(420, m.top + m.bottom + rows * 38);
  const plotW = VBW - m.left - m.right;
  const plotH = height - m.top - m.bottom;
  const xmin = Math.min(0, ...items.map(i => Number(i.value) || 0));
  const xmax = niceMax(Math.max(d.xMax || 0, d.baseline || 0, ...items.map(i => Number(i.value) || 0), 0.0001));
  const span = xmax - Math.min(0, xmin);
  const X = (v) => m.left + ((v - Math.min(0, xmin)) / span) * plotW;
  let g = '';
  g += `<rect x="${m.left}" y="${m.top}" width="${plotW}" height="${plotH}" fill="${C.fill}" stroke="${C.border}" stroke-width="0.75"/>`;
  // x ticks
  const xticks = [0, xmax]; if (xmin < 0) xticks.push(Math.min(0, xmin));
  for (const t of xticks) {
    const xx = X(t);
    g += `<line x1="${xx}" y1="${m.top}" x2="${xx}" y2="${m.top + plotH}" stroke="${C.border}" stroke-width="0.75" stroke-dasharray="4 3"/>`;
    g += text(xx, m.top + plotH + 16, (Math.round(t * 100) / 100).toString(), { font: F.mono, size: 11, fill: C.secondary, anchor: 'middle' });
  }
  if (d.baseline != null) {
    const xx = X(d.baseline);
    g += `<line x1="${xx}" y1="${m.top}" x2="${xx}" y2="${m.top + plotH}" stroke="${C.ink}" stroke-width="0.75" stroke-dasharray="5 4"/>`;
    g += text(xx, m.top - 6, trunc(d.baselineLabel || `${d.baseline}`, 30), { font: F.body, size: 11, fill: C.secondary, anchor: 'middle' });
  }
  const rowH = plotH / rows;
  items.forEach((it, i) => {
    const cy = m.top + rowH * (i + 0.5);
    const v = Number(it.value) || 0;
    const cx = X(v); const x0 = X(0);
    g += text(m.left - 10, cy + 4, trunc(it.label, 26), { font: F.body, size: 12, fill: C.ink, anchor: 'end' });
    g += `<line x1="${x0}" y1="${cy}" x2="${cx}" y2="${cy}" stroke="${C.border}" stroke-width="1"/>`;
    g += `<circle cx="${cx}" cy="${cy}" r="5" fill="${it.highlight ? C.red : C.ink}"/>`;
    // Place the value label inside-left for dots near the right edge so it never
    // overflows the plot region; otherwise to the right of the dot.
    const nearRight = cx > m.left + plotW * 0.82;
    const labLeft = (v < 0 || nearRight);
    g += text(cx + (labLeft ? -10 : 10), cy + 4, (Math.round(v * 100) / 100).toString(), { font: F.mono, size: 11, fill: C.ink, anchor: labLeft ? 'end' : 'start' });
  });
  if (d.unit) g += text(MARGIN, height - 14, trunc(d.unit, 60), { font: F.body, size: 11, fill: C.secondary });
  return { inner: header(spec).markup + g, height };
}

function rFlow(spec) {
  const d = spec.data || {};
  const stages = (d.stages || []).slice(0, 6);
  const height = 420;
  const { markup: hdr, y: hy } = header(spec);
  const n = stages.length || 1;
  const gap = 26;
  const availW = VBW - 2 * MARGIN;
  const bw = Math.min(150, (availW - gap * (n - 1)) / n);
  const bh = 76;
  const cy = 200;
  const totalW = bw * n + gap * (n - 1);
  let x = (VBW - totalW) / 2;
  let g = '';
  stages.forEach((s, i) => {
    g += `<rect x="${x}" y="${cy - bh / 2}" width="${bw}" height="${bh}" fill="${C.white}" stroke="${C.border}" stroke-width="1" rx="0"/>`;
    if (s.num != null) g += text(x + 8, cy - bh / 2 + 16, String(s.num), { font: F.mono, size: 11, fill: C.secondary });
    g += multiline(x + bw / 2, cy - 4, s.label, { maxChars: Math.floor(bw / 7), maxLines: 3, lh: 14, anchor: 'middle', font: F.body, size: 12, fill: C.ink });
    if (i < n - 1) {
      const x1 = x + bw + 4, x2 = x + bw + gap - 4, my = cy;
      const rel = (d.relations && d.relations[i]) || 'arrow';
      if (rel === 'block') {
        g += `<line x1="${x1}" y1="${my}" x2="${(x1 + x2) / 2 + 3}" y2="${my}" stroke="${C.ink}" stroke-width="1.5"/>`;
        g += `<line x1="${(x1 + x2) / 2 + 3}" y1="${my - 9}" x2="${(x1 + x2) / 2 + 3}" y2="${my + 9}" stroke="${C.ink}" stroke-width="1.5"/>`;
      } else {
        g += `<line x1="${x1}" y1="${my}" x2="${x2 - 2}" y2="${my}" stroke="${C.ink}" stroke-width="1.5" marker-end="url(#arrow)"/>`;
      }
      if (d.relLabels && d.relLabels[i]) g += text((x1 + x2) / 2, my - 10, trunc(d.relLabels[i], 16), { font: F.body, size: 10, fill: C.secondary, anchor: 'middle' });
    }
    x += bw + gap;
  });
  if (d.note) g += text(MARGIN, height - 16, trunc(d.note, 90), { font: F.body, size: 11, fill: C.secondary });
  return { inner: hdr + g, height };
}

function rComparison(spec) {
  const d = spec.data || {};
  const rows = (d.rows || []).slice(0, 7);
  const height = Math.max(420, 120 + rows.length * 44 + 40);
  const { markup: hdr } = header(spec);
  const midX = VBW / 2;
  const colL = MARGIN + (midX - MARGIN) / 2;
  const colR = midX + (VBW - MARGIN - midX) / 2;
  const top = 88;
  let g = '';
  g += `<line x1="${midX}" y1="${top - 16}" x2="${midX}" y2="${height - 40}" stroke="${C.border}" stroke-width="1"/>`;
  g += text(colL, top, trunc(d.leftTitle || 'Before', 28), { font: F.body, size: 12, weight: 700, fill: C.ink, anchor: 'middle' });
  g += text(colR, top, trunc(d.rightTitle || 'After', 28), { font: F.body, size: 12, weight: 700, fill: C.ink, anchor: 'middle' });
  const rowH = 44; let y = top + 30;
  rows.forEach((r) => {
    g += `<rect x="${MARGIN + 8}" y="${y - 16}" width="${midX - MARGIN - 24}" height="32" fill="${C.fill}" stroke="${C.border}" stroke-width="1"/>`;
    g += multiline(colL, y + 3, r.left, { maxChars: 30, maxLines: 2, lh: 12, anchor: 'middle', font: F.body, size: 11, fill: C.ink });
    g += `<rect x="${midX + 16}" y="${y - 16}" width="${VBW - MARGIN - midX - 24}" height="32" fill="${C.white}" stroke="${C.border}" stroke-width="1"/>`;
    g += multiline(colR, y + 3, r.right, { maxChars: 30, maxLines: 2, lh: 12, anchor: 'middle', font: F.body, size: 11, fill: r.highlight ? C.red : C.ink });
    if (r.label) g += text(midX, y + 3, '', {});
    y += rowH;
  });
  if (d.axisLabel) g += text(VBW / 2, height - 16, trunc(d.axisLabel, 80), { font: F.body, size: 11, fill: C.secondary, anchor: 'middle' });
  return { inner: hdr + g, height };
}

function rTimeline(spec) {
  const d = spec.data || {};
  const marks = (d.markers || []).slice(0, 7);
  const height = 420;
  const { markup: hdr } = header(spec);
  const y = 210;
  const x0 = MARGIN + 20, x1 = VBW - MARGIN - 20;
  let g = `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${C.ink}" stroke-width="1.5" marker-end="url(#arrow)"/>`;
  const n = marks.length || 1;
  const step = (x1 - x0 - 30) / Math.max(1, n - 1);
  marks.forEach((mk, i) => {
    const x = x0 + (n === 1 ? (x1 - x0) / 2 : step * i);
    g += `<line x1="${x}" y1="${y - 6}" x2="${x}" y2="${y + 6}" stroke="${C.ink}" stroke-width="1.5"/>`;
    g += `<circle cx="${x}" cy="${y}" r="4" fill="${i === n - 1 ? C.red : C.ink}"/>`;
    const above = i % 2 === 0;
    if (mk.sub) g += text(x, above ? y - 44 : y + 30, trunc(mk.sub, 18), { font: F.mono, size: 11, fill: C.secondary, anchor: 'middle' });
    g += multiline(x, above ? y - 28 : y + 46, mk.label, { maxChars: 16, maxLines: 2, lh: 13, anchor: 'middle', font: F.body, size: 12, fill: C.ink });
  });
  if (d.axisLabel) g += text(VBW / 2, height - 18, trunc(d.axisLabel, 80), { font: F.body, size: 11, fill: C.secondary, anchor: 'middle' });
  return { inner: hdr + g, height };
}

function rTree(spec) {
  const d = spec.data || {};
  const root = d.root || { label: spec.figureTitle, children: [] };
  const height = 420;
  const { markup: hdr } = header(spec);
  const children = (root.children || []).slice(0, 6);
  const rootY = 110, childY = 250, bw = 120, bh = 56;
  const rootX = VBW / 2;
  let g = '';
  // root box
  g += `<rect x="${rootX - bw / 2}" y="${rootY - bh / 2}" width="${bw}" height="${bh}" fill="${C.white}" stroke="${C.ink}" stroke-width="1.5"/>`;
  g += multiline(rootX, rootY + 2, root.label, { maxChars: 16, maxLines: 2, lh: 14, anchor: 'middle', font: F.body, size: 12, weight: 700, fill: C.ink });
  const n = children.length || 1;
  const avail = VBW - 2 * MARGIN;
  const cbw = Math.min(110, (avail - (n - 1) * 18) / n);
  const totalW = cbw * n + 18 * (n - 1);
  let x = (VBW - totalW) / 2;
  children.forEach((c) => {
    const cx = x + cbw / 2;
    g += `<line x1="${rootX}" y1="${rootY + bh / 2}" x2="${cx}" y2="${childY - bh / 2}" stroke="${C.border}" stroke-width="1"/>`;
    g += `<rect x="${x}" y="${childY - bh / 2}" width="${cbw}" height="${bh}" fill="${C.fill}" stroke="${C.border}" stroke-width="1"/>`;
    g += multiline(cx, childY - 2, c.label, { maxChars: Math.floor(cbw / 6.5), maxLines: 3, lh: 13, anchor: 'middle', font: F.body, size: 11, fill: C.ink });
    x += cbw + 18;
  });
  return { inner: hdr + g, height };
}

function rNetwork(spec) {
  const d = spec.data || {};
  const nodes = (d.nodes || []).slice(0, 7);
  const edges = d.edges || [];
  const height = 420;
  const { markup: hdr } = header(spec);
  const cx = VBW / 2, cy = 230, R = 140;
  const pos = {};
  nodes.forEach((nd, i) => {
    if (nd.x != null && nd.y != null) { pos[nd.id] = { x: nd.x, y: nd.y }; return; }
    const ang = -Math.PI / 2 + (2 * Math.PI * i) / nodes.length;
    pos[nd.id] = { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) * 0.8 };
  });
  let g = '';
  // edges first
  edges.forEach((e) => {
    const a = pos[e.from], b = pos[e.to]; if (!a || !b) return;
    if (e.kind === 'block') {
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      g += `<line x1="${a.x}" y1="${a.y}" x2="${mx}" y2="${my}" stroke="${C.ink}" stroke-width="1.5"/>`;
      const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
      const px = -dy / len * 8, py = dx / len * 8;
      g += `<line x1="${mx + px}" y1="${my + py}" x2="${mx - px}" y2="${my - py}" stroke="${C.ink}" stroke-width="1.5"/>`;
    } else {
      g += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${C.ink}" stroke-width="1.5" marker-end="url(#arrow)"/>`;
    }
    if (e.label) g += text((a.x + b.x) / 2, (a.y + b.y) / 2 - 6, trunc(e.label, 18), { font: F.body, size: 10, fill: C.secondary, anchor: 'middle' });
  });
  // nodes
  const bw = 108, bh = 50;
  nodes.forEach((nd) => {
    const p = pos[nd.id];
    const fill = nd.highlight ? C.red : C.white;
    const tcol = nd.highlight ? C.white : C.ink;
    g += `<rect x="${p.x - bw / 2}" y="${p.y - bh / 2}" width="${bw}" height="${bh}" fill="${fill}" stroke="${C.ink}" stroke-width="1.25"/>`;
    g += multiline(p.x, p.y + 2, nd.label, { maxChars: 15, maxLines: 3, lh: 12, anchor: 'middle', font: F.body, size: 11, fill: tcol });
  });
  return { inner: hdr + g, height };
}

function rCycle(spec) {
  const d = spec.data || {};
  const stages = (d.stages || []).slice(0, 6);
  const height = 420;
  const { markup: hdr } = header(spec);
  const cx = VBW / 2, cy = 235, R = 130;
  const n = stages.length || 1;
  const pos = stages.map((_, i) => {
    const ang = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  });
  let g = '';
  // arrows along the ring
  for (let i = 0; i < n; i++) {
    const a = pos[i], b = pos[(i + 1) % n];
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    // pull toward center slightly for curve feel: draw straight arrow between node edges
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    const sx = a.x + ux * 42, sy = a.y + uy * 30, ex = b.x - ux * 42, ey = b.y - uy * 30;
    g += `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" stroke="${C.ink}" stroke-width="1.5" marker-end="url(#arrow)"/>`;
  }
  const bw = 96, bh = 50;
  stages.forEach((s, i) => {
    const p = pos[i];
    g += `<rect x="${p.x - bw / 2}" y="${p.y - bh / 2}" width="${bw}" height="${bh}" fill="${C.white}" stroke="${C.ink}" stroke-width="1.25"/>`;
    g += multiline(p.x, p.y + 2, s.label, { maxChars: 13, maxLines: 3, lh: 12, anchor: 'middle', font: F.body, size: 11, fill: C.ink });
  });
  return { inner: hdr + g, height };
}

function rSchematic(spec) {
  const d = spec.data || {};
  const layers = (d.layers || []).slice(0, 6);
  const n = layers.length || 1;
  const height = Math.max(420, 110 + n * 52 + 40);
  const { markup: hdr } = header(spec);
  const lw = 300, lx = MARGIN + 30;
  let y = 96;
  let g = '';
  layers.forEach((l, i) => {
    g += `<rect x="${lx}" y="${y}" width="${lw}" height="40" fill="${i % 2 ? C.fill : C.white}" stroke="${C.ink}" stroke-width="1"/>`;
    g += text(lx + 12, y + 24, trunc(l.label, 34), { font: F.body, size: 12, fill: C.ink });
    // leader line + number
    g += `<line x1="${lx + lw}" y1="${y + 20}" x2="${lx + lw + 40}" y2="${y + 20}" stroke="${C.border}" stroke-width="1"/>`;
    g += `<circle cx="${lx + lw + 50}" cy="${y + 20}" r="10" fill="${C.white}" stroke="${C.ink}" stroke-width="1"/>`;
    g += text(lx + lw + 50, y + 24, String(i + 1), { font: F.mono, size: 11, fill: C.ink, anchor: 'middle' });
    if (l.note) g += text(lx + lw + 68, y + 24, trunc(l.note, 24), { font: F.body, size: 11, fill: C.secondary });
    y += 52;
  });
  return { inner: hdr + g, height };
}

function rAnnotated(spec) {
  const d = spec.data || {};
  const callouts = (d.callouts || []).slice(0, 6);
  const height = 420;
  const { markup: hdr } = header(spec);
  const cx = VBW / 2, cy = 230, bw = 150, bh = 80;
  let g = `<rect x="${cx - bw / 2}" y="${cy - bh / 2}" width="${bw}" height="${bh}" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.5"/>`;
  g += multiline(cx, cy + 2, d.centerLabel || spec.figureTitle, { maxChars: 18, maxLines: 3, lh: 14, anchor: 'middle', font: F.body, size: 12, weight: 700, fill: C.ink });
  const n = callouts.length || 1;
  callouts.forEach((c, i) => {
    const ang = -Math.PI / 2 + (2 * Math.PI * i) / n;
    const ex = cx + 250 * Math.cos(ang), ey = cy + 150 * Math.sin(ang);
    const sx = cx + (bw / 2) * Math.cos(ang), sy = cy + (bh / 2) * Math.sin(ang);
    g += `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" stroke="${C.border}" stroke-width="1"/>`;
    g += `<circle cx="${ex}" cy="${ey}" r="3" fill="${C.ink}"/>`;
    const anchor = ex < cx ? 'end' : 'start';
    g += multiline(ex + (ex < cx ? -8 : 8), ey + 4, c.label, { maxChars: 18, maxLines: 2, lh: 12, anchor, font: F.body, size: 11, fill: C.ink });
  });
  return { inner: hdr + g, height };
}

const RENDERERS = {
  bar: rBar, dotplot: rDot, flow: rFlow, comparison: rComparison, timeline: rTimeline,
  tree: rTree, network: rNetwork, conceptmap: rNetwork, cycle: rCycle, schematic: rSchematic, annotated: rAnnotated,
};

// ---------- main ----------
const specsPath = process.argv[2];
const manifestOut = process.argv[3] || null;
if (!specsPath) { console.error('usage: node cajal-svg-gen.mjs <specs.json> [manifest.json]'); process.exit(1); }
const imagesDir = 'images';
if (!existsSync(imagesDir)) mkdirSync(imagesDir, { recursive: true });

const specs = JSON.parse(readFileSync(specsPath, 'utf8'));
const manifest = [];
for (const spec of specs) {
  try {
    const NN = String(spec.figureNumber).padStart(2, '0');
    if (!spec.figureSlug) spec.figureSlug = slug(spec.figureTitle);
    const base = `${spec.chapterSlug}-fig-${NN}`;
    const svgPath = join(imagesDir, `${base}.svg`);
    const pngPath = join(imagesDir, `${base}.png`);
    if (existsSync(svgPath) || existsSync(pngPath)) {
      manifest.push({ file: `${base}.svg`, title: spec.figureTitle, type: spec.figureType, status: 'skipped', chapter: spec.chapterSlug });
      console.log(`SKIPPED (already exists): ${base}.svg`);
      continue;
    }
    const render = RENDERERS[spec.render] || RENDERERS.flow;
    const { inner, height } = render(spec);
    const svg = frame(spec, inner + sourceLine(spec, height), height);
    writeFileSync(svgPath, svg, 'utf8');
    manifest.push({ file: `${base}.svg`, title: spec.figureTitle, type: spec.figureType, status: 'generated', chapter: spec.chapterSlug });
    console.log(`generated: ${base}.svg`);
  } catch (err) {
    manifest.push({ file: `${spec.chapterSlug}-fig-${String(spec.figureNumber).padStart(2, '0')}.svg`, title: spec.figureTitle, type: spec.figureType, status: 'error: ' + err.message, chapter: spec.chapterSlug });
    console.error(`ERROR ${spec.chapterSlug} fig ${spec.figureNumber}: ${err.message}`);
  }
}
if (manifestOut) writeFileSync(manifestOut, JSON.stringify(manifest, null, 2));
const gen = manifest.filter(m => m.status === 'generated').length;
const skip = manifest.filter(m => m.status === 'skipped').length;
const err = manifest.filter(m => m.status.startsWith('error')).length;
console.log(`\nDONE  generated=${gen} skipped=${skip} errors=${err} total=${manifest.length}`);
