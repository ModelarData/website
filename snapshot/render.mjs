// node render.mjs <url> <outdir> [desktop|mobile] [--no-dom] — scrolls the page so Wix renders everything, saves DOM + full-page screenshot
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const [url, out, mode = 'desktop', flag] = process.argv.slice(2);
const mobile = mode === 'mobile';
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--hide-scrollbars'],
});
const page = await browser.newPage();
if (mobile) {
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
} else {
  await page.setViewport({ width: 1366, height: 800 });
}
const log = [];
page.on('response', r => { if (r.status() >= 400) log.push(`${r.status()} ${r.url()}`); });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
// scroll slowly so entrance animations, lazy images and galleries fire
const h = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y <= h + 800; y += 300) {
  await page.evaluate(y => window.scrollTo(0, y), y);
  await new Promise(r => setTimeout(r, 250));
}
await new Promise(r => setTimeout(r, 3000));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 1500));
fs.mkdirSync(out, { recursive: true });
if (flag !== '--no-dom') fs.writeFileSync(`${out}/${mode}_dom.html`, await page.content());
await page.screenshot({ path: `${out}/${mode}.png`, fullPage: true });
fs.writeFileSync(`${out}/${mode}_errors.txt`, log.join('\n'));
await browser.close();
