const puppeteer = require("puppeteer");

const Scraper = module.exports;

Scraper.getData = async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  
  const page = await browser.newPage();

  await page.goto("https://www.grants.gov/web/grants/search-grants.html");

  let searchGrantsList = [];

  for (let index = 1; searchGrantsList.length < 1000; index++) {
    await page.waitForSelector("#embeddedIframe");

    const iframe = await page.$("#embeddedIframe");
    const contentIframe = await iframe.contentFrame();

    await contentIframe.waitForSelector(
      "#searchResultsDiv > table.grid > tbody > tr:nth-child(2) > td:nth-child(1) > a"
    );

    const data = await contentIframe.$$eval(
      ".gridevenrow, .gridoddrow",
      (element) => {
        return element.map((content) => {
          const notEmpty = (content) => {
            if (content != null && content.trim() != "") {
              return content;
            } else {
              return null;
            }
          };

          const javaScriptToValidUrl = (content) => {
            if (content.querySelector("a") !== null) {
              const id = content
                .querySelector("a")
                .getAttribute("href")
                .replace(/[^0-9]/g, "");
              return `https://www.grants.gov/web/grants/view-opportunity.html?oppId=${id}`;
            } else {
              return null;
            }
          };

          return {
            number: notEmpty(content.cells[0].textContent),
            title: notEmpty(content.cells[1].textContent),
            agency: notEmpty(content.cells[2].textContent),
            status: notEmpty(content.cells[3].textContent),
            postedDate: notEmpty(content.cells[4].textContent),
            closeDate: notEmpty(content.cells[5].textContent),
            javascript: javaScriptToValidUrl(content.cells[0]),
          };
        });
      }
    );

    searchGrantsList = searchGrantsList.concat(data);

    await contentIframe.evaluate(`javascript:pageSearchResults( '${index}' )`);
  }

  browser.close();

  return searchGrantsList;
};
