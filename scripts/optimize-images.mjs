// Generates responsive WebP variants (480w, 768w, 1200w) for every source image
// in public/assets/images. Run: node scripts/optimize-images.mjs
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import sharp from 'sharp';

const dir = 'public/assets/images/';
const widths = [480, 768, 1200];
const files = (await readdir(dir)).filter((f) => f.endsWith('.webp') && !/-\d+w\.webp$/.test(f));

for (const file of files) {
  const { width } = await sharp(dir + file).metadata();
  for (const w of widths.filter((w) => w < width)) {
    const out = dir + file.replace(/\.webp$/, `-${w}w.webp`);
    if (existsSync(out)) continue;
    await sharp(dir + file).resize({ width: w }).webp({ quality: 72, effort: 6 }).toFile(out);
    console.log('created', out);
  }
  console.log(file, width);
}
