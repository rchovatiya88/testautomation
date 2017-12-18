module.exports = {
    '@tags': ['clicks'],
    'go to click click ': function (browser) {
      browser
        .url('https://clickclickclick.click')
        .waitForElementVisible('body', 5000)
        .click('body > main > div > div:nth-child(1) > a')
        .pause(5000)
        .click('body > main > div > div:nth-child(1) > a')
        .pause(5000);
      console.log('Hello World Click!')
    },
  
    'Browser quit': function (browser) {
      browser
        .pause(5000)
        .end();
    }
  };
  