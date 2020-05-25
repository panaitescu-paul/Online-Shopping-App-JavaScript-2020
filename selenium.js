// Order of execution:
// ls / dir
// cd to folder
// to install the dependencies, run: npm install
// to run the automated tests: npm run selenium
const {Builder, By} = require('selenium-webdriver');
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

chai.should();
const sleepTime = 1000;
let driver = new Builder().forBrowser('chrome').build();

describe('El Tienda - Purchase Page', () => {
    describe('The page opening', () => {
        it('should open the page', async () => {
            await driver.sleep(sleepTime);
            await driver.get(__dirname + '\\index.html');
        });
        it('should maximize the page', async () => {
            await driver.manage().window().maximize();
        });
        it('should check the page title', async () => {
            await driver.sleep(sleepTime);
            let pageTitle = await driver.getTitle();
            pageTitle.should.eql('El Tienda - Purchase Page');
        });
        it('should check the page background color to be white', async () => {
            await driver.sleep(sleepTime);
            let backgroundColor = await driver.findElement(By.css('body')).getCssValue("background-color");
            backgroundColor.should.eql('rgba(255, 255, 255, 1)');
        });
    });
    describe('Navbar', () => {
        it('should check the navbar background color to be light blue', async () => {
            await driver.sleep(sleepTime);
            let backgroundColor = await driver.findElement(By.css('body > div > form > nav')).getCssValue("background-color");
            backgroundColor.should.eql('rgba(227, 242, 253, 1)');
        });
        it('should check the total price background color to be blue', async () => {
            await driver.sleep(sleepTime);
            let backgroundColor = await driver.findElement(By.css('#card > div > div:nth-child(1) > h3')).getCssValue("background-color");
            backgroundColor.should.eql('rgba(0, 98, 204, 1)');
        });
        it('should check the total price value to be 0 DKK by default', async () => {
            await driver.sleep(sleepTime);
            let getTotalPrice = await driver.findElement(By.css('#card > div > div:nth-child(1) > h3')).getText();
            getTotalPrice.should.eql('Total Price: 0 DKK');
        });
        it('should check the total price text color to be white', async () => {
            await driver.sleep(sleepTime);
            let textColor = await driver.findElement(By.css('#card > div > div:nth-child(1) > h3'))
                .getCssValue("color");
            textColor.should.eql('rgba(255, 255, 255, 1)');
        });
        it('should check the purchase background color to be green', async () => {
            await driver.sleep(sleepTime);
            let backgroundColor = await driver.findElement(By.css('#buyBtn')).getCssValue("background-color");
            backgroundColor.should.eql('rgba(40, 167, 69, 1)');
        });
        it('should check the purchase value', async () => {
            await driver.sleep(sleepTime);
            let getTotalPrice = await driver.findElement(By.css('#buyBtn')).getText();
            getTotalPrice.should.eql('Purchase');
        });
        it('should check the purchase text color to be white', async () => {
            await driver.sleep(sleepTime);
            let textColor = await driver.findElement(By.css('#buyBtn'))
                .getCssValue("color");
            textColor.should.eql('rgba(255, 255, 255, 1)');
        });
    });
    describe('First Name', () => {
        it('should check the First Name label value', async () => {
            await driver.sleep(sleepTime);
            let getFirstNameLabelValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(3) > label')).getText();
            getFirstNameLabelValue.should.eql('First Name');
        });
        it('should check the First Name label name to be black', async () => {
            await driver.sleep(sleepTime);
            let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(3) > label'))
                .getCssValue("color");
            textColor.should.eql('rgba(33, 37, 41, 1)');
        });
        it('should write "Constantin-Razvan" for the First Name field', async () => {
            await driver.sleep(sleepTime);
            await driver.findElement(By.id('firstName')).sendKeys('Constantin-Razvan');
        });
        it('should check that the First Name value is "Constantin-Razvan"', async () => {
            await driver.sleep(sleepTime);
            let getFirstName = await driver.findElement(By.id('firstName')).getAttribute("value");
            getFirstName.should.eql('Constantin-Razvan');
        });
        it('should check that the First Name input color to be gray', async () => {
            await driver.sleep(sleepTime);
            let getFirstNameColor = await driver.findElement(By.id('firstName')).getCssValue("color");
            getFirstNameColor.should.eql('rgba(73, 80, 87, 1)');
        });
        it('should check First Name comments value', async () => {
            await driver.sleep(sleepTime);
            let getFirstNameCommentsValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(3) > small')).getText();
            getFirstNameCommentsValue.should.eql('Only Danish alphabet characters (with diacritics), and the dash (\'-\') symbol are allowed. Example: Jon');
        });
        it('should check First Name comments color to be gray', async () => {
            await driver.sleep(sleepTime);
            let getFirstNameCommentsColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(3) > small')).getCssValue("color");
            getFirstNameCommentsColor.should.eql('rgba(108, 117, 125, 1)');
        });
    });
    describe('The page closing', () => {
        it('should close the page', async () => {
            await driver.sleep(sleepTime);
            await driver.quit();
        });
    });
});