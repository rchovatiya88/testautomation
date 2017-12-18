module.exports = {
    tags: ['testcase3'],
    'Go to Login Page and existign user should login' : function (browser) {
      browser
        .url('http://www.artsyjewels.com')
        .waitForElementVisible('body', 1000)
        .click('#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account')
        .setValue('#CustomerEmail', '')
        .setValue('#CustomerPassword','')
        .click('#customer_login > div > input')
        .pause(3000)
        .end();
    }
  };