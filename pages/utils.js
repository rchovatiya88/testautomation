/*
  If you get error like xlsx module not found, install it from NPM manager. User command "npm i xlsx" to install this module.
  For more info visit https://www.npmjs.com/package/xlsx and https://github.com/SheetJS/js-xlsx
*/
var xlsx = require('xlsx'); 
var fs = require('fs');


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

      //Read EXCEL file
      var workbook = xlsx.readFile('tests/testdata/usersdata.xlsx');

      //Converted worksheet into JSON because data reading and iteration process is easier over JSON data.
      var usersData = xlsx.utils.sheet_to_json(workbook.Sheets.Sheet1);

      //Just to show iteration over JSON data, used loop and break it after first iteration
      var username, password;
      for (var index = 0; index < usersData.length; index++) {        
        username = usersData[index].Username;
        password = usersData[index].Password

        break
      }
      
      browser
     .setValue('#id_username', username)
     .setValue('#id_password', password)
     .click('body > div.container.maincontent > div > div > div.col-md-6.login__form > form > div > div > button');
    };
    this.forgotpassword = function (){
      browser
      .click('#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account')
      .click('#RecoverPassword')
      .setValue('#RecoverEmail', 'randomemail@gmail.com')
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
  