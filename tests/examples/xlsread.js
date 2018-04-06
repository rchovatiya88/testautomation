
/*
  If you get error like xlsx module not found, install it from NPM manager. User command "npm i xlsx" to install this module.
  For more info visit https://www.npmjs.com/package/xlsx and https://github.com/SheetJS/js-xlsx
*/
var xlsx = require('xlsx'); 
var fs = require('fs');

module.exports = {
  '@tags': ['readxls'],
  before: function (browser) {
    browser
        .windowMaximize()
        .url('http://artsyjewels.com')
        .waitForElementVisible('body', 1000);
  },
  'Read excel': function (browser) {

    //Read EXCEL file
    var workbook = xlsx.readFile('tests/testdata/data.xlsx');

    //Converted worksheet into JSON because data reading and iteration process is easier over JSON data.
    var data = xlsx.utils.sheet_to_json(workbook.Sheets.Sheet1);

     //Just to show iteration over JSON data, used loop and break it after first iteration
     var ring;
     for (var index = 0; index < data.length; index++) {        
      ring = data[index].Rings;

      break
     }

     browser
        .setValue('.search-header__input', [ring, browser.Keys.ENTER]);
  }
};


