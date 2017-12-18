var utils = require('../../../pages/utils');

module.exports = {
  '@tags': ['forgotpassword'],
  before: function (browser) {
    utils(browser).openBrowser();
  },
  'Go to the login page': function (browser) {
    utils(browser).loginMainButton();
  },
  'login as admin': function (browser) {
    utils(browser).forgotpassword();
    browser.pause(2000);
  },
  after: function (browser) {
    browser.pause(5000);
    browser.end();
  }
};

