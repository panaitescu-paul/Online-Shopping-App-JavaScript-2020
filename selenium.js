// Order of execution:
// ls / dir
// cd to folder
// to install the dependencies run: npm i
// to run the tests: npm run selenium
const {Builder, By} = require('selenium-webdriver');
const mocha = require('mocha');
const chai = require('chai');
const describe = mocha.describe;
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const path = require('path');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

chai.should();
const sleepTime = 1000;
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--disable-web-security');
const driver = new Builder().setChromeOptions(chromeOptions).forBrowser('chrome').build();

describe('El Tienda - Purchase Page', () => {
    describe('The page opening', () => {
        it('should open the page', async () => {
            await driver.sleep(sleepTime);
            await driver.get('file://' + path.join(__dirname, 'index.html'));
        });
        it('should maximize the page', async () => {
            await driver.manage().window().maximize();
        });
        it('should check the page title', async () => {
            let pageTitle = await driver.getTitle();
            pageTitle.should.eql('El Tienda - Purchase Page');
        });
    });

    describe('Interface validation', () => {

        describe('Navbar', () => {
            it('should check the navbar background color to be light blue', async () => {
                let backgroundColor = await driver.findElement(By.css('body > div > form > nav')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(227, 242, 253, 1)');
            });
            it('should check the card background color to be white', async () => {
                let backgroundColor = await driver.findElement(By.css('#card')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(255, 255, 255, 1)');
            });
            it('should check the card border color to be blue', async () => {
                let borderColor = await driver.findElement(By.css('#card')).getCssValue("border-color");
                borderColor.should.eql('rgba(0, 123, 255, 0.5)');
            });
            it('should check the total price background color to be blue', async () => {
                let backgroundColor = await driver.findElement(By.css('#card > div > div:nth-child(1) > h3')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(0, 98, 204, 1)');
            });
            it('should check the total price value to be 0 DKK by default', async () => {
                let getTotalPrice = await driver.findElement(By.css('#card > div > div:nth-child(1) > h3')).getText();
                getTotalPrice.should.eql('Total Price: 0 DKK');
            });
            it('should check the total price text color to be white', async () => {
                let textColor = await driver.findElement(By.css('#card > div > div:nth-child(1) > h3'))
                    .getCssValue("color");
                textColor.should.eql('rgba(255, 255, 255, 1)');
            });
            it('should check the purchase background color to be green', async () => {
                let backgroundColor = await driver.findElement(By.css('#buyBtn')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(40, 167, 69, 1)');
            });
            it('should check the purchase value', async () => {
                let getTotalPrice = await driver.findElement(By.css('#buyBtn')).getText();
                getTotalPrice.should.eql('Purchase');
            });
            it('should check the purchase text color to be white', async () => {
                let textColor = await driver.findElement(By.css('#buyBtn'))
                    .getCssValue("color");
                textColor.should.eql('rgba(255, 255, 255, 1)');
            });
        });

        describe('Page interface', () => {
            it('should check the whole page background color to be white', async () => {
                let backgroundColor = await driver.findElement(By.css('body')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(255, 255, 255, 1)');
            });
            // Internal Page title
            it('should check the page title header value', async () => {
                let getPageTitleValue = await driver.findElement(By.css('body > div > div > h1')).getText();
                getPageTitleValue.should.eql('El Tienda - Purchase Page');
            });
            it('should check the page title header text color to be black', async () => {
                let textColor = await driver.findElement(By.css('body > div > div > h1')).getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // Personal info card
            it('should check the personal info card background color to be white', async () => {
                let backgroundColor = await driver.findElement(By.css('body > div > form > div:nth-child(2)')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(255, 255, 255, 1)');
            });
            it('should check the personal info card border color to be blue', async () => {
                let borderColor = await driver.findElement(By.css('body > div > form > div:nth-child(2)')).getCssValue("border-color");
                borderColor.should.eql('rgba(0, 123, 255, 0.5)');
            });
            it('should check the personal info header value', async () => {
                let getPersonalInfoValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div.title > h3')).getText();
                getPersonalInfoValue.should.eql('Personal Info');
            });
            it('should check the personal info header text color to be black', async () => {
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div.title > h3')).getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // List of available products card
            it('should check the list of products card background color to be white', async () => {
                let backgroundColor = await driver.findElement(By.css('body > div > form > div:nth-child(3)')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(255, 255, 255, 1)');
            });
            it('should check the list of products card border color to be blue', async () => {
                let borderColor = await driver.findElement(By.css('body > div > form > div:nth-child(3)')).getCssValue("border-color");
                borderColor.should.eql('rgba(0, 123, 255, 0.5)');
            });
            it('should check the list of products header value', async () => {
                let getProductsListValue = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > div > h3')).getText();
                getProductsListValue.should.eql('List of Available Products');
            });
            it('should check the list of products header text color to be black', async () => {
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > div > h3')).getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // Shipping info card
            it('should check the shipping info card background color to be white', async () => {
                let backgroundColor = await driver.findElement(By.css('body > div > form > div:nth-child(4)')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(255, 255, 255, 1)');
            });
            it('should check the shipping info card border color to be blue', async () => {
                let borderColor = await driver.findElement(By.css('body > div > form > div:nth-child(4)')).getCssValue("border-color");
                borderColor.should.eql('rgba(0, 123, 255, 0.5)');
            });
            it('should check the shipping info header value', async () => {
                let getShippingInfoValue = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div.title > h3')).getText();
                getShippingInfoValue.should.eql('Shipping Info');
            });
            it('should check the shipping info header text color to be black', async () => {
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div.title > h3')).getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // Delivery options card
            it('should check the delivery options card background color to be white', async () => {
                let backgroundColor = await driver.findElement(By.css('body > div > form > div:nth-child(5)')).getCssValue("background-color");
                backgroundColor.should.eql('rgba(255, 255, 255, 1)');
            });
            it('should check the delivery options card border color to be blue', async () => {
                let borderColor = await driver.findElement(By.css('body > div > form > div:nth-child(5)')).getCssValue("border-color");
                borderColor.should.eql('rgba(0, 123, 255, 0.5)');
            });
            it('should check the delivery options header value', async () => {
                let getDeliveryOptionsValue = await driver.findElement(By.css('body > div > form > div:nth-child(5) > div > div.title > h3')).getText();
                getDeliveryOptionsValue.should.eql('Delivery Options');
            });
            it('should check the delivery options header text color to be black', async () => {
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(5) > div > div.title > h3')).getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
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
            it('should write "Constantin-Razvan" for the First Name field', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('firstName')).sendKeys('Constantin-Razvan');
                // await driver.findElement(By.id('firstName')).sendKeys('C');
                // await driver.findElement(By.id('buyBtn')).click();
                // await driver.sleep(sleepTime)
                // let getErrorMessage = await driver.findElement(By.id('firstName')).getAttribute("validationMessage");
                // getErrorMessage.should.eql('Please match the requested format.');
            });
            it('should check that the First Name value is "Constantin-Razvan"', async () => {
                await driver.sleep(sleepTime);
                let getFirstName = await driver.findElement(By.id('firstName')).getAttribute("value");
                getFirstName.should.eql('Constantin-Razvan');
            });
            it('should check the First Name input color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getFirstNameColor = await driver.findElement(By.id('firstName')).getCssValue("color");
                getFirstNameColor.should.eql('rgba(73, 80, 87, 1)');
            });
        });

        describe('Last Name', () => {
            it('should check the Last Name label value', async () => {
                await driver.sleep(sleepTime);
                let getLastNameLabelValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(4) > label')).getText();
                getLastNameLabelValue.should.eql('Last Name');
            });
            it('should check the Last Name label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(4) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check Last Name comments value', async () => {
                await driver.sleep(sleepTime);
                let getLastNameCommentsValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(4) > small')).getText();
                getLastNameCommentsValue.should.eql('Only Danish alphabet characters (with diacritics), and the dash (\'-\') symbol are allowed. Example: Snow');
            });
            it('should check Last Name comments color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getLastNameCommentsColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(4) > small')).getCssValue("color");
                getLastNameCommentsColor.should.eql('rgba(108, 117, 125, 1)');
            });
            it('should write "Tarau" for the Last Name field', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('lastName')).sendKeys('Tarau');
            });
            it('should check that the Last Name value is "Constantin-Razvan"', async () => {
                await driver.sleep(sleepTime);
                let getLastName = await driver.findElement(By.id('lastName')).getAttribute("value");
                getLastName.should.eql('Tarau');
            });
            it('should check the Last Name input color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getLastNameColor = await driver.findElement(By.id('lastName')).getCssValue("color");
                getLastNameColor.should.eql('rgba(73, 80, 87, 1)');
            });
        });

        describe('Age', () => {
            it('should check the Age label value', async () => {
                await driver.sleep(sleepTime);
                let getAgeLabelValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(5) > label')).getText();
                getAgeLabelValue.should.eql('Age');
            });
            it('should check the Age label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(5) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check Age comments value', async () => {
                await driver.sleep(sleepTime);
                let getAgeCommentsValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(5) > small')).getText();
                getAgeCommentsValue.should.eql('Only numbers between 14-150 are allowed. Example: 23');
            });
            it('should check Age comments color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getAgeCommentsColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(5) > small')).getCssValue("color");
                getAgeCommentsColor.should.eql('rgba(108, 117, 125, 1)');
            });
            it('should write "21" for the Age field', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('age')).sendKeys('21');
            });
            it('should check that the Age value is "Constantin-Razvan"', async () => {
                await driver.sleep(sleepTime);
                let getAge = await driver.findElement(By.id('age')).getAttribute("value");
                getAge.should.eql('21');
            });
            it('should check the Age input color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getAgeColor = await driver.findElement(By.id('age')).getCssValue("color");
                getAgeColor.should.eql('rgba(73, 80, 87, 1)');
            });
        });

        describe('Email', () => {
            it('should check the Email label value', async () => {
                await driver.sleep(sleepTime);
                let getEmailLabelValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(6) > label')).getText();
                getEmailLabelValue.should.eql('Email Address');
            });
            it('should check the Email label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(6) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check Email comments value', async () => {
                await driver.sleep(sleepTime);
                let getEmailCommentsValue = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(6) > small')).getText();
                getEmailCommentsValue.should.eql('Must have valid prefix, \'@\' character, and valid domain (gmail.com, yahoo.com, or custom). Example: jonsnow@gmail.com');
            });
            it('should check Email comments color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getEmailCommentsColor = await driver.findElement(By.css('body > div > form > div:nth-child(2) > div > div:nth-child(6) > small')).getCssValue("color");
                getEmailCommentsColor.should.eql('rgba(108, 117, 125, 1)');
            });
            it('should write "cons0343@stud.kea.dk" for the Email field', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('emailAddress')).sendKeys('cons0343@stud.kea.dk');
            });
            it('should check that the Email value is "cons0343@stud.kea.dk"', async () => {
                await driver.sleep(sleepTime);
                let getEmail = await driver.findElement(By.id('emailAddress')).getAttribute("value");
                getEmail.should.eql('cons0343@stud.kea.dk');
            });
            it('should check the Email input color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getEmailColor = await driver.findElement(By.id('emailAddress')).getCssValue("color");
                getEmailColor.should.eql('rgba(73, 80, 87, 1)');
            });
        });

        describe('Products list', () => {
            // No.
            it('should check the No. table header value', async () => {
                await driver.sleep(sleepTime);
                let getProductNumberValue = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(1)')).getText();
                getProductNumberValue.should.eql('No.');
            });
            it('should check the No. table header color to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(1)'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // Name
            it('should check the Name table header value', async () => {
                await driver.sleep(sleepTime);
                let getProductNameValue = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(2)')).getText();
                getProductNameValue.should.eql('Name');
            });
            it('should check the Name table header color to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(2)'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // Price
            it('should check the Price table header value', async () => {
                await driver.sleep(sleepTime);
                let getProductPriceValue = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(3)')).getText();
                getProductPriceValue.should.eql('Price');
            });
            it('should check the Price table header color to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(3)'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // Quantity
            it('should check the Quantity table header value', async () => {
                await driver.sleep(sleepTime);
                let getQuantityNameValue = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(4)')).getText();
                getQuantityNameValue.should.eql('Quantity (0-10)');
            });
            it('should check the Quantity table header color to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(3) > div > table > thead > tr > th:nth-child(4)'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            // List
            // it('should check the product list values for number, name and price', async () => {
            //     await driver.sleep(sleepTime);
            // console.log(PRODUCTS);
            // let getProductNumberValue;
            // let getProductNameValue;
            // let getProductPriceValue;
            //
            // for(let i = 0; i < PRODUCTS.length; i++) {
            //     getProductNumberValue = await driver.findElement(By.css(`#products > tr:nth-child(${i}) > td:nth-child(1)`)).getText();
            //     getProductNameValue = await driver.findElement(By.css(`#products > tr:nth-child(${i}) > td:nth-child(2)`)).getText();
            //     getProductPriceValue = await driver.findElement(By.css(`#products > tr:nth-child(${i}) > td:nth-child(3)`)).getText();
            //
            //     getProductNumberValue.should.eql(`${PRODUCTS[i].id}`);
            //     getProductNameValue.should.eql(`${PRODUCTS[i].name}`);
            //     getProductPriceValue.should.eql(`${PRODUCTS[i].price}`);
            // }

            // PRODUCTS.forEach(async (product, index) => {
            //     // #products > tr:nth-child(1) > td:nth-child(1)
            //     // #products > tr:nth-child(1) > td:nth-child(2)
            //     // #products > tr:nth-child(1) > td:nth-child(3)
            //     console.log(index);
            //     getProductNumberValue = await driver.findElement(By.css(`#products > tr:nth-child(${index}) > td:nth-child(1)`)).getText();
            //     getProductNameValue = await driver.findElement(By.css(`#products > tr:nth-child(${index}) > td:nth-child(2)`)).getText();
            //     getProductPriceValue = await driver.findElement(By.css(`#products > tr:nth-child(${index}) > td:nth-child(3)`)).getText();
            //
            //     getProductNumberValue.should.eql(`${product.id}`);
            //     getProductNameValue.should.eql(`${product.name}`);
            //     getProductPriceValue.should.eql(`${product.price}`);
            //
            // });
            // });
        });

        describe('Address', () => {
            it('should check the Address label value', async () => {
                await driver.sleep(sleepTime);
                let getAddressLabelValue = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(3) > label')).getText();
                getAddressLabelValue.should.eql('Address');
            });
            it('should check the Address label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(3) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check Address comments value', async () => {
                await driver.sleep(sleepTime);
                let getAddressCommentsValue = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(3) > small')).getText();
                getAddressCommentsValue.should.eql('Only alphanumerics, Danish diacritics, spaces and certain symbols \'.,-\' are allowed.');
            });
            it('should check Address comments color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getAddressCommentsColor = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(3) > small')).getCssValue("color");
                getAddressCommentsColor.should.eql('rgba(108, 117, 125, 1)');
            });
            it('should write "Albertslund" for the Address field', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('address')).sendKeys('Albertslund');
            });
            it('should check that the Address value is "Albertslund"', async () => {
                await driver.sleep(sleepTime);
                let getAddress = await driver.findElement(By.id('address')).getAttribute("value");
                getAddress.should.eql('Albertslund');
            });
            it('should check the Email input color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getAddressColor = await driver.findElement(By.id('address')).getCssValue("color");
                getAddressColor.should.eql('rgba(73, 80, 87, 1)');
            });
        });

        describe('Card number', () => {
            it('should check the Card Number label value', async () => {
                await driver.sleep(sleepTime);
                let getCardNumberLabelValue = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(4) > label')).getText();
                getCardNumberLabelValue.should.eql('Card Number');
            });
            it('should check the Card Number label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(4) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check Card Number comments value', async () => {
                await driver.sleep(sleepTime);
                let getCardNumberCommentsValue = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(4) > small')).getText();
                getCardNumberCommentsValue.should.eql('Must follow the \'1111222233334444\' format.');
            });
            it('should check Card Number comments color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getCardNumberCommentsColor = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(4) > small')).getCssValue("color");
                getCardNumberCommentsColor.should.eql('rgba(108, 117, 125, 1)');
            });
            it('should write "1234123412341234" for the Card Number field', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('cardNumber')).sendKeys('1234123412341234');
            });
            it('should check that the Card Number value is "1234123412341234"', async () => {
                await driver.sleep(sleepTime);
                let getCardNumber = await driver.findElement(By.id('cardNumber')).getAttribute("value");
                getCardNumber.should.eql('1234123412341234');
            });
            it('should check the Card Number input color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getCardNumberColor = await driver.findElement(By.id('cardNumber')).getCssValue("color");
                getCardNumberColor.should.eql('rgba(73, 80, 87, 1)');
            });
        });

        describe('Card security code', () => {
            it('should check the Card Security Code label value', async () => {
                await driver.sleep(sleepTime);
                let getCardSecurityCodeLabelValue = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(5) > label')).getText();
                getCardSecurityCodeLabelValue.should.eql('Card Security Code');
            });
            it('should check the Card Security Code label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(5) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check Card Security Code comments value', async () => {
                await driver.sleep(sleepTime);
                let getCardSecurityCodeCommentsValue = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(5) > small')).getText();
                getCardSecurityCodeCommentsValue.should.eql('Must be exactly 3 digits.');
            });
            it('should check Card Security Code comments color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getCardSecurityCodeCommentsColor = await driver.findElement(By.css('body > div > form > div:nth-child(4) > div > div:nth-child(5) > small')).getCssValue("color");
                getCardSecurityCodeCommentsColor.should.eql('rgba(108, 117, 125, 1)');
            });
            it('should write "123" for the Card Security Code field', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('cardSecurityCode')).sendKeys('123');
            });
            it('should check that the Card Security Code value is "123"', async () => {
                await driver.sleep(sleepTime);
                let getCardSecurityCode = await driver.findElement(By.id('cardSecurityCode')).getAttribute("value");
                getCardSecurityCode.should.eql('123');
            });
            it('should check the Card Security Code input color to be gray', async () => {
                await driver.sleep(sleepTime);
                let getCardSecurityCodeColor = await driver.findElement(By.id('cardSecurityCode')).getCssValue("color");
                getCardSecurityCodeColor.should.eql('rgba(73, 80, 87, 1)');
            });
        });

        describe('Delivery options', () => {
            it('should check the Nearest Pickup Point option label value', async () => {
                await driver.sleep(sleepTime);
                let getNearestPickupPointLabelValue = await driver.findElement(By.css('#deliveryOptions > div:nth-child(1) > label')).getText();
                getNearestPickupPointLabelValue.should.eql('Nearest Pickup Point - 50 DKK');
            });
            it('should check the Nearest Pickup Point option label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('#deliveryOptions > div:nth-child(1) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check the Company Delivery option label value', async () => {
                await driver.sleep(sleepTime);
                let getCompanyDeliveryLabelValue = await driver.findElement(By.css('#deliveryOptions > div:nth-child(2) > label')).getText();
                getCompanyDeliveryLabelValue.should.eql('Company Delivery - 75 DKK');
            });
            it('should check the Company Delivery option label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('#deliveryOptions > div:nth-child(2) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should check the Home Delivery delivery option label value', async () => {
                await driver.sleep(sleepTime);
                let getHomeDeliveryLabelValue = await driver.findElement(By.css('#deliveryOptions > div:nth-child(3) > label')).getText();
                getHomeDeliveryLabelValue.should.eql('Home Delivery - 100 DKK');
            });
            it('should check the Home Delivery option label name to be black', async () => {
                await driver.sleep(sleepTime);
                let textColor = await driver.findElement(By.css('#deliveryOptions > div:nth-child(3) > label'))
                    .getCssValue("color");
                textColor.should.eql('rgba(33, 37, 41, 1)');
            });
            it('should click on the Home Delivery option', async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('Home Delivery')).click();
            });
            it('should check that the Home Delivery option is selected', async () => {
                await driver.sleep(sleepTime);
                let isOptionSelected = await driver.findElement(By.id('Home Delivery')).isSelected();
                isOptionSelected.should.eql(true);
            });
            it('should total price change to 100 DKK', async () => {
                await driver.sleep(sleepTime);
                let getTotalPrice = await driver.findElement(By.css('#card > div > div:nth-child(1) > h3')).getText();
                getTotalPrice.should.eql('Total Price: 100 DKK');
            });
        });
    });

    describe('The page refresh', async () => {
        it('should refresh the page', async () => {
            await driver.navigate().refresh();
        });
    });

    describe('Functionality validation', () => {
        const validFirstName = "Paul";
        const validLastName = "Panaitescu";
        const validAge = "20";
        const validEmail = "paulp@gmail.com";
        const validAddress = "Albert";
        const validCardNumber = "1234123412341234";
        const validCardSecurityCode = "123";

        describe('First Name', () => {

        });

        describe('Last Name', () => {

        });

        describe('Age', () => {

        });

        describe('Email', () => {
            it(`should write "${validFirstName}" to the First Name field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('firstName'));
                await field.clear();
                await field.sendKeys(validFirstName);
            });
            it(`should write "${validLastName}" to the Last Name field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('lastName'));
                await field.clear();
                await field.sendKeys(validLastName);
            });
            it(`should write "${validAge}" to the Age field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('age'));
                await field.clear();
                await field.sendKeys(validAge);
            });

            const testPrefixes = [
                ["PaulP", 'is basic', ''],
                ["PaulP123", 'contains numbers', ''],
                ["Paul_P.12-3", 'contains underscores, periods and dashes followed by letter and numbers', ''],
                ["PåulP", 'contains non-english alphabet letters', 'A part followed by \'@\' should not contain the symbol \'å\'.'],
                ["Paul P=12+3", 'contains non-alphabet characters besides "_", "." and "-"', 'A part followed by \'@\' should not contain the symbol \' \'.'],
            ];
            const testDomains = [
                ["gmail.com", 'is basic', ''],
                ["gmail1.com", 'contains numbers', ''],
                ["g-mail.com", 'contains dashes', ''],
                ["gmåil.com", 'contains non-english alphabet letters', 'Please match the requested format.'],
                ["g_mail.com", 'contains non-alphabet characters besides "-"', 'A part following \'@\' should not contain the symbol \'_\'.'],
                ["gmail.", 'has the last portion shorter than 2 characters', '\'.\' is used at a wrong position in \'gmail.\'.'],
            ];
            const testEmails = [
                ["p@g.c", 'is 5 characters long', 'Please match the requested format.'],
                ["p@g.co", 'is 6 characters long', ''],
                ["p@g.com", 'is 7 characters long', ''],
                ["this-email-address-is-fifty-nine-characters-long@g-mail.com", 'is 59 characters long', ''],
                ["this-email-address-is-about-sixty-characters-long@g-mail.com", 'is 60 characters long', ''],
                ["this-email-address-is-cca-sixty-one-characters-long@gmail.com", 'is 61 characters long', ''],
                ["this-email-address-is-missing-the-at-sign.com", 'is missing the at sign', 'Please include an \'@\' in the email address. \'this-email-address-is-missing-the-at-sign.com\' is missing an \'@\'.'],
            ];

            describe('With prefixes', () => {
                testPrefixes.forEach(testPrefix => {
                    it(`should write '${testPrefix[0]}' to the Email field that ${testPrefix[1]}`, async () => {
                        await driver.sleep(sleepTime);
                        const field = driver.findElement(By.id('emailAddress'));
                        await field.clear();
                        await field.sendKeys(`${testPrefix[0]}@gmail.com`);
                    });

                    it(`should show ${testPrefix[2] === '' ? "no errors" : `the following error: '${testPrefix[2]}'`}`, async () => {
                        await driver.sleep(sleepTime);
                        await driver.findElement(By.id('buyBtn')).click();
                        await driver.sleep(sleepTime);
                        let errorMessage = await driver.findElement(By.id('emailAddress')).getAttribute("validationMessage");
                        errorMessage.should.eql(testPrefix[2]);
                    });
                });
            });

            describe('With domains', () => {
                testDomains.forEach(testDomain => {
                    it(`should write "${testDomain[0]}" to the Email field that ${testDomain[1]}`, async () => {
                        await driver.sleep(sleepTime);
                        const field = driver.findElement(By.id('emailAddress'));
                        await field.clear();
                        await field.sendKeys(`paulp@${testDomain[0]}`);
                    });

                    it(`should show ${testDomain[2] === '' ? "no errors" : `the following error: '${testDomain[2]}'`}`, async () => {
                        await driver.sleep(sleepTime);
                        await driver.findElement(By.id('buyBtn')).click();
                        await driver.sleep(sleepTime);
                        let errorMessage = await driver.findElement(By.id('emailAddress')).getAttribute("validationMessage");
                        errorMessage.should.eql(testDomain[2]);
                    });
                });
            });

            testEmails.forEach(testEmail => {
                it(`should write "${testEmail[0]}" to the Email field that ${testEmail[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id('emailAddress'));
                    await field.clear();
                    await field.sendKeys(`${testEmail[0]}`);
                });

                it(`should show ${testEmail[2] === '' ? "no errors" : `the following error: '${testEmail[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id('emailAddress')).getAttribute("validationMessage");
                    errorMessage.should.eql(testEmail[2]);
                });
            });
        });

        describe('Products list', () => {

        });

        describe('Address', () => {
            it(`should write "${validFirstName}" to the First Name field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('firstName'));
                await field.clear();
                await field.sendKeys(validFirstName);
            });
            it(`should write "${validLastName}" to the Last Name field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('lastName'));
                await field.clear();
                await field.sendKeys(validLastName);
            });
            it(`should write "${validAge}" to the Age field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('age'));
                await field.clear();
                await field.sendKeys(validAge);
            });
            it(`should write "${validEmail}" to the Email field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('age'));
                await field.clear();
                await field.sendKeys(validAge);
            });

            const testAddresses = [
                ["Alber", 'is 5 characters long', 'Please match the requested format.'],
                ["Albert", 'is 6 characters long', ''],
                ["Alberts", 'is 7 characters long', ''],
                [
                    "Niels Bohrs Alle 23, 5230 Odense M, Odense, Denmark but the address needs to be exactly one hundred nineteen, soo......",
                    'is 119 characters long',
                    ''
                ],
                [
                    "thisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwenty",
                    'is 120 characters long',
                    ''
                ],
                [
                    "thisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentys",
                    'is 121 characters long',
                    ''
                ],
                [
                    "Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K., DENMARK",
                    'contains letters from the Danish alphabet',
                    ''
                ],
                [
                    "Martin Rebas, Gyllenkrooksgatan 1, 412 84 GÖTEBORG, SWEDEN ",
                    'contains letters from outside the Danish alphabet',
                    'Please match the requested format.'
                ],
                [
                    "Peter Mogensen, c/o Fictional Company, Niels Bohrs Alle 23, 1330",
                    'contains special characters other than space (" "), ".", "," and "-"',
                    'Please match the requested format.'
                ],
            ];

            testAddresses.forEach(testAddress => {
                it(`should write "${testAddress[0]}" to the Address field that ${testAddress[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id('address'));
                    await field.clear();
                    await field.sendKeys(`${testAddress[0]}`);
                });

                it(`should show ${testAddress[2] === '' ? "no errors" : `the following error: '${testAddress[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id('address')).getAttribute("validationMessage");
                    errorMessage.should.eql(testAddress[2]);
                });
            });
        });

        describe('Card number', () => {

        });

        describe('Card security code', () => {

        });

        describe('Delivery options', () => {

        });
    });

    describe('The page closing', () => {
        it('should close the page', async () => {
            await driver.sleep(sleepTime);
            await driver.quit();
        });
    })
});
