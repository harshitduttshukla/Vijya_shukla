import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const htmlPath = resolve(root, 'dist/index.html');
const serverEntry = resolve(root, '.ssr-dist/entry-server.js');

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntry)),
  readFile(htmlPath, 'utf8'),
]);

const appHtml = render();
const output = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

if (output === template) {
  throw new Error('Prerender failed: root mount point was not found in dist/index.html');
}

await writeFile(htmlPath, output, 'utf8');
console.log('Prerendered the homepage into dist/index.html');
