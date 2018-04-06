var request = require('request');

module.exports = {
  '@tags': ['hitapi'],
  before: function (browser) {
    browser
        .windowMaximize()
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000);
  },
  'Search city': function (browser) {

    request('https://jsonplaceholder.typicode.com/users', function (error, response, body) { 
      
      var data = JSON.parse(body);
      var city = data[0].address.city;
    
      browser
        .setValue('#lst-ib', [city, browser.Keys.ENTER]);
    });
  }
};


