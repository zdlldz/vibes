// generate-pdf.js
// Uses Playwright + Chromium to render vibe-article.html → vibe-article.pdf
// Run with: node generate-pdf.js

const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const htmlPath = path.resolve(__dirname, 'artifacts/vibe-article.html');
  const pdfPath  = path.resolve(__dirname, 'artifacts/vibe-article.pdf');

  console.log('Launching Chromium…');
  const browser = await chromium.launch();
  const page    = await browser.newPage();

  // Load the HTML file (file:// so local resources work, CDN needs network)
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  // Wait for KaTeX to finish rendering math
  await page.waitForFunction(() => {
    const katexElems = document.querySelectorAll('.katex');
    return katexElems.length > 0;
  }, { timeout: 15000 }).catch(() => {
    console.warn('KaTeX elements not detected — continuing anyway.');
  });

  // Extra settle time for web fonts
  await page.waitForTimeout(1500);

  console.log('Printing to PDF…');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top:    '22mm',
      right:  '20mm',
      bottom: '24mm',
      left:   '20mm',
    },
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log(`✓ PDF written to: ${pdfPath}`);
})();
