const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    await page.goto('https://web.gencat.cat/ca/inici');
    await page.fill('#cercadorOcultGoogle', 'agenda cultural');
    await page.keyboard.press('Enter');
    //await browser.close();

})();