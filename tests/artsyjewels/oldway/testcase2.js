module.exports = {
    tags: ['testcase2'],
    'Go to the Search box and search for specific term' : function (browser) {
        browser
          .url('http://www.artsyjewels.com')
          .waitForElementVisible('body', 1000)
          .setValue('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form > input', ['silver bracelets', browser.Keys.ENTER])
          .pause(3000)
        browser.assert.title('silver bracelets – Artsyjewels')
        browser.assert.urlContains('https://www.artsyjewels.com/search?q=silver+bracelets');
        browser.saveScreenshot('./screenshots/testcase2.jpg');
        browser.end();
      }
}