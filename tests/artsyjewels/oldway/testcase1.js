module.exports = {
  tags: ['testcase1'],
  'Open Homepage and click on headers': function (browser) {
      browser
        .url('http://www.artsyjewels.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Artsyjewels- High quality fashion jewelry at a reasonable price')
        .click('#SiteNav > li.site-nav--has-dropdown.site-nav--has-centered-dropdown > a') // second
      //  .waitForElementVisible('#SiteNavLabel-jewelry > div > div > div:nth-child(1) > ul:nth-child(4) > li > a')
        .click('#SiteNavLabel-jewelry > div > div > div:nth-child(1) > ul:nth-child(4) > li > a')
        .pause(3000)
        .end();
    }
};
