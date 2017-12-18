module.exports = {
    tags: ['keyboardactions'],
    'Go to the Search box and search for specific term' : function (browser) {
        browser
          .url('http://www.artsyjewels.com')
          .waitForElementVisible('body', 1000)
          .setValue('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form > input', ['silver bracelet', browser.Keys.ENTER])
          .pause(3000)
        browser.assert.title('silver bracelet – Artsyjewels')
          .end();
      }
}