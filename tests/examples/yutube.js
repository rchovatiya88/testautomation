module.exports = {
    '@tags': ['yutube'],
'Go to youtube': function (browser) {
    browser
      .url('https://www.youtube.com/')
      .setValue('#search',"huster's ambition")
      .pause(3000)
      .click('#search-icon-legacy > yt-icon')
      .click('#video-title')
      .pause(13000)
    },
  'Browser quit': function (browser) {
    browser
      .pause(5000)
      .end();
  }
};