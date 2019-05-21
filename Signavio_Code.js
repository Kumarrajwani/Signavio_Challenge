const {Builder, By, Key, until} = require('selenium-webdriver');

(async function Signavio_Challenge() {
  let driver = new Builder().forBrowser('chrome').build();
    try {
      
     var name_pwd = process.argv.slice(2);
     driver.get('https://editor.signavio.com/p/login');
     driver.findElement(By.id('name')).sendKeys(name_pwd[0], Key.RETURN);
     driver.findElement(By.id('password')).sendKeys(name_pwd[1], Key.RETURN);
     driver.findElement(By.id('remember')).click();
     driver.manage().window().maximize(); 
     driver.sleep(10000);
     driver.findElement(By.xpath('//*[starts-with(@id,"ext-gen2")]')).sendKeys('ext-gen2');    

  } 
    finally {
    //await driver.quit();
  }
})();



