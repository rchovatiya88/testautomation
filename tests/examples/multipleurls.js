module.exports = {
    '@tags': ['multisites'],
'Go to Google': function (browser) {
    browser
      .url('https://www.google.com/')
      .pause(5000)
      .click('#gbqfbb')
      .pause(3000)
      .click('#tsf > div.tsf-p > div.jsb > center > div');
    browser.pause(5000);
  },
  'Go to Amazon': function (browser) {
    browser
      .url('https://www.amazon.com/')
      .waitForElementVisible('body', 1000)
      .setValue('#twotabsearchtextbox', 'Christmas Tree')
      .click('#nav-search > form > div.nav-right > div > input')
      .pause(5000);
      browser.execute('scrollTo(0,1000)');
      browser.execute('scrollTo(0,2000)');
    browser.execute('scrollTo(0,3000)');
  },
  'Browser quit': function (browser) {
    browser
      .pause(5000)
      .end();
  }
};