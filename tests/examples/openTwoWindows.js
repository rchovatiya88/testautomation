var host = 'http://www.google.com';

module.exports = {
  '@tags': ['window'],
  'some test': function (client) {
    client
          .url(host);
    client.waitForElementVisible('body', 1000);
    client.pause(3000)
            .execute(function (newWindow) {
              window.open('http://www.twitter.com', null, 'height=1024,width=768');
            }, [host])
            .assert.urlContains('google')
            .window_handles(function (result) {
              var temp = result.value[1];
              this.switchWindow(temp);
            })
            .assert.urlContains('twitter')
        .end();
  }
};
