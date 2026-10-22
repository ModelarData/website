// node anchors.mjs <url> [desktop|mobile] -> prints JSON {dataItemId: targetElementId}
import puppeteer from 'puppeteer-core';

const [url, mode = 'desktop'] = process.argv.slice(2);
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true,
});
const page = await browser.newPage();
if (mode === 'mobile') {
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
} else await page.setViewport({ width: 1366, height: 800 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
const ids = await page.$$eval('a[data-anchor]', as => [...new Set(as.map(a => a.dataset.anchor))]);
const result = {};
for (const id of ids) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 300));
  await page.evaluate(id => {
    const a = [...document.querySelectorAll(`a[data-anchor="${id}"]`)].find(a => a.offsetParent) ||
      document.querySelector(`a[data-anchor="${id}"]`);
    a.click();
  }, id);
  await new Promise(r => setTimeout(r, 2500));
  result[id] = await page.evaluate(() => {
    const y = window.scrollY;
    // the anchor element Wix scrolls to: an element with an id whose page top is closest to scrollY
    let best = null, bestD = 1e9;
    for (const el of document.body.querySelectorAll('[id]')) { if (!el.getBoundingClientRect().height || el.closest('#SITE_HEADER')) continue;
      const t = el.getBoundingClientRect().top + y;
      const d = Math.abs(t - y);
      if (d < bestD || (d === bestD && el.contains(best))) { best = el; bestD = d; }
    }
    return { scrollY: y, id: best && best.id, tag: best && best.tagName, cls: best && String(best.className).slice(0, 60), d: bestD };
  });
}
console.log(JSON.stringify(result, null, 1));
await browser.close();
