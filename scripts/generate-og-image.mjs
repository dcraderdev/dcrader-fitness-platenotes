// Generates public/og-image.png (1200x630) from an inline SVG using sharp.
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../public/og-image.png');
mkdirSync(dirname(outPath), { recursive: true });

const bg = '#586c45';       // sage-600 (brand)
const accent = '#a7b88e';   // sage-300
const cream = '#fbf8f1';    // cream-50

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#586c45"/>
      <stop offset="100%" stop-color="#455639"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <!-- subtle plate circle motif -->
  <circle cx="1020" cy="180" r="220" fill="${accent}" fill-opacity="0.12"/>
  <circle cx="1020" cy="180" r="150" fill="${cream}" fill-opacity="0.08"/>
  <circle cx="1020" cy="180" r="80"  fill="${accent}" fill-opacity="0.18"/>

  <!-- eyebrow -->
  <text x="90" y="180" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="600"
        letter-spacing="6" fill="${accent}">HONEST WEEKLY MEAL PLANS</text>

  <!-- title -->
  <text x="90" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="140" font-weight="700"
        fill="${cream}">Plate Notes</text>

  <!-- subtitle -->
  <text x="90" y="400" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="400"
        fill="${cream}" opacity="0.92">Real recipes. A shopping list that fits a</text>
  <text x="90" y="450" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="400"
        fill="${cream}" opacity="0.92">normal Sunday afternoon.</text>

  <!-- corner attribution -->
  <text x="90" y="570" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="500"
        fill="${accent}">dcrader.dev</text>
</svg>
`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (${png.length} bytes)`);
