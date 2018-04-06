module.exports = function (browser) {
    this.openBrowser = function () {
      browser
        .windowMaximize()
        .url('http://artsyjewels.com/')
        .waitForElementVisible('body', 1000);
      return browser;
    };
    this.loginMainButton = function () {
      browser
      .click('.site-header__account')
      .waitForElementVisible('body', 1000);
    };
    this.adminLogin = function () {
      
      browser
     .setValue('#id_username', "admin@admin.com")
     .setValue('#id_password', "")
     .click('body > div.container.maincontent > div > div > div.col-md-6.login__form > form > div > div > button');
    };
    this.forgotpassword = function (){
      browser
      .click('#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account')
      .click('#RecoverPassword')
      .setValue('#RecoverEmail', 'ronchoqa@gmail.com')
      .click('#RecoverPasswordForm > div.form-vertical > form > div > p > input')
    };
    this.productRingCategory = function () {
      browser
      .click('xpath', '//li//input')
      .click('xpath', '//li[contains(text(),"Rings")]');
    };
    this.CreateProductButton = function () {
      browser
      .click('xpath', 'html/body/main/div/div/div/div[1]/form/div[2]/button');
      browser.pause(3000);
    };
    return this;
  };
  