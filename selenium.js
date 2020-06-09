/*----------------------------------------------------------*
*                     Terminal commands                     *
*-----------------------------------------------------------*
*           Path Navigation:        ls / dir                *
*                                   cd to folder            *
*-----------------------------------------------------------*
*           Install Dependencies:   npm install             *
*           Run Selenium Tests:     npm run selenium        *
* ----------------------------------------------------------*/

const {Builder, By} = require('selenium-webdriver');
const mocha = require('mocha');
const chai = require('chai');
const describe = mocha.describe;
const it = mocha.it;
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const path = require('path');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

chai.should();
const sleepTime = 100;
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--disable-web-security');
const driver = new Builder().setChromeOptions(chromeOptions).forBrowser('chrome').build();

const PRODUCTS = [
    {
        id: "0",
        name: "Tomato",
        price: "3",
        isForAdults: false
    },
    {
        id: "1",
        name: "Cucumber",
        price: "5",
        isForAdults: false
    },
    {
        id: "2",
        name: "Onion",
        price: "2",
        isForAdults: false
    },
    {
        id: "3",
        name: "Cheese",
        price: "12",
        isForAdults: false
    },
    {
        id: "4",
        name: "Milk",
        price: "8",
        isForAdults: false
    },
    {
        id: "5",
        name: "Water",
        price: "10",
        isForAdults: false
    },
    {
        id: "6",
        name: "Orange Juice",
        price: "14",
        isForAdults: false
    },
    {
        id: "7",
        name: "Bubble Water",
        price: "8",
        isForAdults: false
    },
    {
        id: "8",
        name: "Wine",
        price: "25",
        isForAdults: true
    },
    {
        id: "9",
        name: "Beer",
        price: "8",
        isForAdults: true
    },
    {
        id: "10",
        name: "Whiskey",
        price: "200",
        isForAdults: true
    },
    {
        id: "11",
        name: "Vodka",
        price: "130",
        isForAdults: true
    },
    {
        id: "12",
        name: "Tequila",
        price: "160",
        isForAdults: true
    },
    {
        id: "13",
        name: "Sangria",
        price: "100",
        isForAdults: true
    },
    {
        id: "14",
        name: "Spanish Sherry",
        price: "300",
        isForAdults: true
    },
    {
        id: "15",
        name: "Agua Fresca",
        price: "75",
        isForAdults: false
    },
    {
        id: "16",
        name: "Bread",
        price: "9",
        isForAdults: false
    },
    {
        id: "17",
        name: "Apple Pie",
        price: "9",
        isForAdults: false
    },
    {
        id: "18",
        name: "Orange",
        price: "4",
        isForAdults: false
    },
    {
        id: "19",
        name: "Banana",
        price: "5",
        isForAdults: false
    },
    {
        id: "20",
        name: "Apple",
        price: "4",
        isForAdults: false
    }
];

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
                // backgroundColor.should.eql('rgba(227, 242, 253, 1)');
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

        describe('Page Interface', () => {
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
            it('should check that the Age value is 21', async () => {
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

        describe('Products List', () => {
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
            it('should check the product list values for number, name and price', async () => {
                await driver.sleep(sleepTime);
                let productNumberValue;
                let productNameValue;
                let productPriceValue;

                for (let i = 0; i < PRODUCTS.length; i++) {
                    productNumberValue = await driver.findElement(By.css(`#products > tr:nth-child(${i + 1}) > th`)).getText();
                    productNameValue = await driver.findElement(By.css(`#products > tr:nth-child(${i + 1}) > td:nth-child(2)`)).getText();
                    productPriceValue = await driver.findElement(By.css(`#products > tr:nth-child(${i + 1}) > td:nth-child(3)`)).getText();

                    productNumberValue.should.eql(`${Number(PRODUCTS[i].id) + 1}`);
                    productNameValue.should.eql(`${PRODUCTS[i].name}`);
                    productPriceValue.should.eql(`${PRODUCTS[i].price} DKK`);
                }
            });
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

        describe('Card Number', () => {
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

        describe('Card Security Code', () => {
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

        describe('Delivery Options', () => {
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
            const testFirstNames = [
                ["P", 'is 1 character long', 'Please match the requested format.'],
                ["Pa", 'is 2 characters long', ''],
                ["Pau", 'is 3 characters long', ''],
                ["Paulspaulspaulspaulspaulspaulspaulspaul", 'is 39 characters long', ''],
                ["Paulspaulspaulspaulspaulspaulspaulspauls", 'is 40 characters long', ''],
                ["Paulspaulspaulspaulspaulspaulspaulspaulss", 'is 41 characters long', ''],
                ["Paul-Danish-Alphabet-Æo-Øo", 'contains letters from the Danish alphabet', ''],
                ["Paul-Dash", 'contains dash ("-") character', ''],
                ["Paul-Nondanishalphabet诶诶诶诶诶诶", 'contains letters from outside the Danish alphabet', 'Please match the requested format.'],
                ["Paul-Specialcharacters!@#$%^&*()", 'contains special characters other than dash (“-”)', 'Please match the requested format.']
            ];

            testFirstNames.forEach(testFirstName => {
                it(`should write "${testFirstName[0]}" to the First Name field that ${testFirstName[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id('firstName'));
                    await field.clear();
                    await field.sendKeys(`${testFirstName[0]}`);
                });

                it(`should show ${testFirstName[2] === '' ? "no errors" : `the following error: '${testFirstName[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id('firstName')).getAttribute("validationMessage");
                    if (errorMessage === 'Please match the format requested.'){
                        errorMessage.should.eql('Please match the format requested.');
                    } else {
                        errorMessage.should.eql(testFirstName[2]);
                    }
                });
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
        });

        describe('Last Name', () => {
            it(`should write "${validFirstName}" to the First Name field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('firstName'));
                await field.clear();
                await field.sendKeys(validFirstName);
            });

            const testLastNames = [
                ["P", 'is 1 character long', 'Please match the requested format.'],
                ["Pa", 'is 2 characters long', ''],
                ["Pan", 'is 3 characters long', ''],
                ["Panaitescupanaitescupanaitescupanaitescupanaitescuanaitesc", 'is 59 characters long', ''],
                ["Panaitescupanaitescupanaitescupanaitescupanaitescuanaitescu", 'is 60 characters long', ''],
                ["Panaitescupanaitescupanaitescupanaitescupanaitescupanaitescul", 'is 61 characters long', ''],
                ["Panaitescu-Danish-Alphabet-Æo-Øo", 'contains letters from the Danish alphabet', ''],
                ["Panaitescu-Dash", 'contains dash ("-") character', ''],
                ["Panaitescu-Nondanishalphabet诶诶诶诶诶诶", 'contains letters from outside the Danish alphabet', 'Please match the requested format.'],
                ["Panaitescu-Specialcharacters!@#$%^&*()", 'contains special characters other than dash (“-”)', 'Please match the requested format.']
            ];

            testLastNames.forEach(testLastName => {
                it(`should write "${testLastName[0]}" to the Last Name field that ${testLastName[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id('lastName'));
                    await field.clear();
                    await field.sendKeys(`${testLastName[0]}`);
                });

                it(`should show ${testLastName[2] === '' ? "no errors" : `the following error: '${testLastName[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id('lastName')).getAttribute("validationMessage");
                    if (errorMessage === 'Please match the format requested.'){
                        errorMessage.should.eql('Please match the format requested.');
                    } else {
                        errorMessage.should.eql(testLastName[2]);
                    }
                });
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
        });

        describe('Age', () => {
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

            const testAges = [
                ["13", 'is smaller than 14', 'Value must be greater than or equal to 14.'],
                ["14", 'enters as 14', ''],
                ["15", 'is bigger than 14', ''],
                ["149", 'is smaller than 150', ''],
                ["150", 'enters as 150', ''],
                ["151", 'is bigger than 150', 'Value must be less than or equal to 150.'],
                ["23.5", 'contains a non-integer value', 'Please enter a valid value. The two nearest valid values are 23 and 24.'],
                ["twenty-three$", 'contains characters other than digits', 'Please enter a number.']
            ];

            testAges.forEach(testAge => {
                it(`should write "${testAge[0]}" to the Age field that ${testAge[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id('age'));
                    await field.clear();
                    await field.sendKeys(`${testAge[0]}`);
                });

                it(`should show ${testAge[2] === '' ? "no errors" : `the following error: '${testAge[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id('age')).getAttribute("validationMessage");
                    errorMessage.should.eql(testAge[2]);
                });
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
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
                ["Paul P=12+3", 'contains non-alphabet characters besides "_", "." and "-"', 'A part followed by \'@\' should not contain the symbol \' \'.']
            ];
            const testDomains = [
                ["gmail.com", 'is basic', ''],
                ["gmail1.com", 'contains numbers', ''],
                ["g-mail.com", 'contains dashes', ''],
                ["gmåil.com", 'contains non-english alphabet letters', 'Please match the requested format.'],
                ["g_mail.com", 'contains non-alphabet characters besides "-"', 'A part following \'@\' should not contain the symbol \'_\'.'],
                ["gmail.", 'has the last portion shorter than 2 characters', '\'.\' is used at a wrong position in \'gmail.\'.']
            ];
            const testEmails = [
                ["p@g.c", 'is 5 characters long', 'Please match the requested format.'],
                ["p@g.co", 'is 6 characters long', ''],
                ["p@g.com", 'is 7 characters long', ''],
                ["this-email-address-is-fifty-nine-characters-long@g-mail.com", 'is 59 characters long', ''],
                ["this-email-address-is-about-sixty-characters-long@g-mail.com", 'is 60 characters long', ''],
                ["this-email-address-is-cca-sixty-one-characters-long@gmail.com", 'is 61 characters long', ''],
                ["this-email-address-is-missing-the-at-sign.com", 'is missing the at sign', 'Please include an \'@\' in the email address. \'this-email-address-is-missing-the-at-sign.com\' is missing an \'@\'.']
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
                        if (errorMessage === 'Please match the format requested.'){
                            errorMessage.should.eql('Please match the format requested.');
                        } else {
                            errorMessage.should.eql(testPrefix[2]);
                        }
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
                        if (errorMessage === 'Please match the format requested.'){
                            errorMessage.should.eql('Please match the format requested.');
                        } else {
                            errorMessage.should.eql(testDomain[2]);
                        }
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
                    if (errorMessage === 'Please match the format requested.'){
                        errorMessage.should.eql('Please match the format requested.');
                    } else {
                        errorMessage.should.eql(testEmail[2]);
                    }
                });
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
        });

        describe('Products List', () => {
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
                const field = driver.findElement(By.id('emailAddress'));
                await field.clear();
                await field.sendKeys(validEmail);
            });

            const testBoundariesProduct1 = PRODUCTS[0];
            const testBoundariesProduct2 = PRODUCTS[1];

            const testQuantityBoundaries = [
                ["-1", 'is smaller than 0', 'Value must be greater than or equal to 0.'],
                ["0", 'is exactly 0', ''],
                ["1", 'is bigger than 0', ''],
                ["9", 'is smaller than 10', ''],
                ["10", 'is exactly 10', ''],
                ["11", 'is bigger than 10', 'Value must be less than or equal to 10.'],
                ["1.5", 'is floating point', 'Please enter a valid value. The two nearest valid values are 1 and 2.'],
                ["abcd#!@", 'contains non-numeric characters', ''],
            ];

            testQuantityBoundaries.forEach(testQuantityBoundary => {
                it(`should write "${testQuantityBoundary[0]}" to the product with id 0 that ${testQuantityBoundary[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id(testBoundariesProduct1.name));
                    await field.clear();
                    await field.sendKeys(`${testQuantityBoundary[0]}`);
                });

                it(`should show ${testQuantityBoundary[2] === '' ? "no errors" : `the following error: '${testQuantityBoundary[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id(testBoundariesProduct1.name)).getAttribute("validationMessage");
                    errorMessage.should.eql(testQuantityBoundary[2]);
                });
            });

            const testQuantity1 = "0";
            const testQuantity2 = "1";

            it(`should write ${testQuantity1} to the first product`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id(testBoundariesProduct1.name));
                await field.clear();
                await field.sendKeys(`${testQuantity1}`);
            });

            it(`should show no errors in the first product`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('buyBtn')).click();
                await driver.sleep(sleepTime);
                let errorMessage = await driver.findElement(By.id(testBoundariesProduct1.name)).getAttribute("validationMessage");
                errorMessage.should.eql('');
            });

            it(`should write ${testQuantity2} to the second product`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id(testBoundariesProduct2.name));
                await field.clear();
                await field.sendKeys(`${testQuantity2}`);
            });

            it(`should show no errors in the second product`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('buyBtn')).click();
                await driver.sleep(sleepTime);
                let errorMessage = await driver.findElement(By.id(testBoundariesProduct2.name)).getAttribute("validationMessage");
                errorMessage.should.eql('');
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
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
                const field = driver.findElement(By.id('emailAddress'));
                await field.clear();
                await field.sendKeys(validEmail);
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
                ]
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
                    if (errorMessage === 'Please match the format requested.'){
                        errorMessage.should.eql('Please match the format requested.');
                    } else {
                        errorMessage.should.eql(testAddress[2]);
                    }
                });
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
        });

        describe('Card Number', () => {
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
                const field = driver.findElement(By.id('emailAddress'));
                await field.clear();
                await field.sendKeys(validEmail);
            });
            it(`should write "${validAddress}" to the Address field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('address'));
                await field.clear();
                await field.sendKeys(validAddress);
            });

            const testCardNumbers = [
                ["123412341234123", 'is 15 characters long', 'Please match the requested format.'],
                ["1234123412341234", 'is 16 characters long', ''],
                ["12341234123412345", 'is 17 characters long', ''],
                ["1234-1234-1234-1", 'contains non-numeric characters', 'Please match the requested format.'],
                ["1234 1234 1234 1", 'contains non-numeric characters (spaces)', 'Please match the requested format.'],
            ];

            testCardNumbers.forEach(testCardNumber => {
                it(`should write "${testCardNumber[0]}" to the Card Number field that ${testCardNumber[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id('cardNumber'));
                    await field.clear();
                    await field.sendKeys(`${testCardNumber[0]}`);
                });

                it(`should show ${testCardNumber[2] === '' ? "no errors" : `the following error: '${testCardNumber[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id('cardNumber')).getAttribute("validationMessage");
                    if (errorMessage === 'Please match the format requested.'){
                        errorMessage.should.eql('Please match the format requested.');
                    } else {
                        errorMessage.should.eql(testCardNumber[2]);
                    }
                });
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
        });

        describe('Card Security Code', () => {
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
                const field = driver.findElement(By.id('emailAddress'));
                await field.clear();
                await field.sendKeys(validEmail);
            });
            it(`should write "${validAddress}" to the Address field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('address'));
                await field.clear();
                await field.sendKeys(validAddress);
            });
            it(`should write "${validCardNumber}" to the Card Number field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('cardNumber'));
                await field.clear();
                await field.sendKeys(validCardNumber);
            });

            const testCardSecurityCodes = [
                ["01", 'is 2 characters long', 'Please match the requested format.'],
                ["012", 'is 3 characters long', ''],
                ["0123", 'is 4 characters long', ''],
                ["o12", 'contains non-numeric characters', 'Please match the requested format.'],
            ];

            testCardSecurityCodes.forEach(testCardSecurityCode => {
                it(`should write "${testCardSecurityCode[0]}" to the Card Security Code field that ${testCardSecurityCode[1]}`, async () => {
                    await driver.sleep(sleepTime);
                    const field = driver.findElement(By.id('cardSecurityCode'));
                    await field.clear();
                    await field.sendKeys(`${testCardSecurityCode[0]}`);
                });

                it(`should show ${testCardSecurityCode[2] === '' ? "no errors" : `the following error: '${testCardSecurityCode[2]}'`}`, async () => {
                    await driver.sleep(sleepTime);
                    await driver.findElement(By.id('buyBtn')).click();
                    await driver.sleep(sleepTime);
                    let errorMessage = await driver.findElement(By.id('cardSecurityCode')).getAttribute("validationMessage");
                    if (errorMessage === 'Please match the format requested.'){
                        errorMessage.should.eql('Please match the format requested.');
                    } else {
                        errorMessage.should.eql(testCardSecurityCode[2]);
                    }
                });
            });
        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
        });

        describe('Delivery Options', () => {
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
                const field = driver.findElement(By.id('emailAddress'));
                await field.clear();
                await field.sendKeys(validEmail);
            });
            it(`should write "${validAddress}" to the Address field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('address'));
                await field.clear();
                await field.sendKeys(validAddress);
            });
            it(`should write "${validCardNumber}" to the Card Number field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('cardNumber'));
                await field.clear();
                await field.sendKeys(validCardNumber);
            });
            it(`should write "${validCardSecurityCode}" to the Card Security Code field`, async () => {
                await driver.sleep(sleepTime);
                const field = driver.findElement(By.id('cardSecurityCode'));
                await field.clear();
                await field.sendKeys(validCardSecurityCode);
            });

            it(`should click on the Nearest Pickup Point on the Delivery Options field`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('Nearest Pickup Point')).click();
            });
            it(`should show no errors`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('buyBtn')).click();
                await driver.sleep(sleepTime);
                let alert = await driver.switchTo().alert();
                let alertText = await alert.getText();
                alertText.should.eql('Shopping cart cannot be empty.');
                await alert.accept();
            });

            it(`should click on the Company Delivery on the Delivery Options field`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('Company Delivery')).click();
            });
            it(`should show no errors`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('buyBtn')).click();
                await driver.sleep(sleepTime);
                let alert = await driver.switchTo().alert();
                let alertText = await alert.getText();
                alertText.should.eql('Shopping cart cannot be empty.');
                await alert.accept();
            });

            it(`should click on the Home Delivery on the Delivery Options field`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('Home Delivery')).click();
            });
            it(`should show no errors`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('buyBtn')).click();
                await driver.sleep(sleepTime);
                let alert = await driver.switchTo().alert();
                let alertText = await alert.getText();
                alertText.should.eql('Shopping cart cannot be empty.');
                await alert.accept();
            });

            it(`should refresh the page`, async () => {
                await driver.sleep(sleepTime);
                await driver.navigate().refresh();
            });

            it(`should show the following error: 'Please select one of these options.'`, async () => {
                await driver.sleep(sleepTime);
                await driver.findElement(By.id('buyBtn')).click();
                await driver.sleep(sleepTime);
                const deliveryOptions = ['Nearest Pickup Point', 'Company Delivery', 'Home Delivery'];
                for (let i = 0; i < deliveryOptions.length; i++) {
                    let errorMessage = await driver.findElement(By.id(deliveryOptions[i])).getAttribute("validationMessage");
                    errorMessage.should.eql('Please select one of these options.');
                }
            });

        });

        describe('The page refresh', async () => {
            it('should refresh the page', async () => {
                await driver.navigate().refresh();
            });
        });

        describe('The Purchase', () => {

            const deliveryOptions = [
                {
                    name: "Nearest Pickup Point",
                    price: 50
                },
                {
                    name: "Company Delivery",
                    price: 75
                },
                {
                    name: "Home Delivery",
                    price: 100
                }
            ];

            describe('Test total price output changes', () => {
                for (const deliveryOption of deliveryOptions) {
                    for (const product of [PRODUCTS[0], PRODUCTS[4], PRODUCTS[10], PRODUCTS[15]]) {
                        const quantity = 5;
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
                            const field = driver.findElement(By.id('emailAddress'));
                            await field.clear();
                            await field.sendKeys(validEmail);
                        });
                        it(`should write "${validAddress}" to the Address field`, async () => {
                            await driver.sleep(sleepTime);
                            const field = driver.findElement(By.id('address'));
                            await field.clear();
                            await field.sendKeys(validAddress);
                        });
                        it(`should write "${validCardNumber}" to the Card Number field`, async () => {
                            await driver.sleep(sleepTime);
                            const field = driver.findElement(By.id('cardNumber'));
                            await field.clear();
                            await field.sendKeys(validCardNumber);
                        });
                        it(`should write "${validCardSecurityCode}" to the Card Security Code field`, async () => {
                            await driver.sleep(sleepTime);
                            const field = driver.findElement(By.id('cardSecurityCode'));
                            await field.clear();
                            await field.sendKeys(validCardSecurityCode);
                        });

                        const price = deliveryOption.price + product.price * quantity;
                        it(`should select ${deliveryOption.name}`, async () => {
                            await driver.sleep(sleepTime);
                            await driver.findElement(By.id(deliveryOption.name)).click();
                        });

                        it(`should set quantity of ${product.name} to ${quantity}`, async () => {
                            await driver.sleep(sleepTime);
                            await driver.findElement(By.id(`${product.name}`)).clear();
                            await driver.findElement(By.id(`${product.name}`)).sendKeys(`${quantity}`);
                        });

                        it(`should be a sum of ${deliveryOption.price} (${deliveryOption.name}) and ${quantity}x ${product.price}(${product.name})`, async () => {
                            await driver.sleep(sleepTime);
                            await driver.findElement(By.id('buyBtn')).click();

                            await driver.sleep(sleepTime);
                            let alert = await driver.switchTo().alert();
                            let alertText = await alert.getText();
                            alertText.should.eql(
                                `Name: ${validFirstName} ${validLastName}\n` +
                                `Age: ${validAge}\n` +
                                `Email: ${validEmail}\n` +
                                `Address: ${validAddress}\n` +
                                `Delivery: ${deliveryOption.name}\n` +
                                `Products: \n \u2022 ${product.name}: ${(product.price * quantity)} DKK\n` +
                                `Total Price: ${price} DKK`);
                            await alert.accept();

                            await driver.sleep(sleepTime);
                            await driver.findElement(By.id(`${product.name}`)).clear();
                            await driver.findElement(By.id(`${product.name}`)).sendKeys('0');
                        });
                    }
                }
            });

            describe('Test Shopping Cart with adult items alert message', () => {
                const deliveryOption = deliveryOptions[0];
                for (const product of [PRODUCTS[9], PRODUCTS[12], PRODUCTS[13]]) {
                    const quantity = 5;
                    const validAge = 15;
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
                        const field = driver.findElement(By.id('emailAddress'));
                        await field.clear();
                        await field.sendKeys(validEmail);
                    });
                    it(`should write "${validAddress}" to the Address field`, async () => {
                        await driver.sleep(sleepTime);
                        const field = driver.findElement(By.id('address'));
                        await field.clear();
                        await field.sendKeys(validAddress);
                    });
                    it(`should write "${validCardNumber}" to the Card Number field`, async () => {
                        await driver.sleep(sleepTime);
                        const field = driver.findElement(By.id('cardNumber'));
                        await field.clear();
                        await field.sendKeys(validCardNumber);
                    });
                    it(`should write "${validCardSecurityCode}" to the Card Security Code field`, async () => {
                        await driver.sleep(sleepTime);
                        const field = driver.findElement(By.id('cardSecurityCode'));
                        await field.clear();
                        await field.sendKeys(validCardSecurityCode);
                    });
                    it(`should select ${deliveryOption.name}`, async () => {
                        await driver.sleep(sleepTime);
                        await driver.findElement(By.id(deliveryOption.name)).click();
                    });

                    it(`should set quantity of ${product.name} to ${quantity}`, async () => {
                        await driver.sleep(sleepTime);
                        await driver.findElement(By.id(`${product.name}`)).clear();
                        await driver.findElement(By.id(`${product.name}`)).sendKeys(`${quantity}`);
                    });

                    it(`should show "Shopping cart contains adult-only items."`, async () => {
                        await driver.sleep(sleepTime);
                        await driver.findElement(By.id('buyBtn')).click();

                        await driver.sleep(sleepTime);
                        let alert = await driver.switchTo().alert();
                        let alertText = await alert.getText();
                        alertText.should.eql('Shopping cart contains adult-only items.');
                        await alert.accept();

                        await driver.sleep(sleepTime);
                        await driver.findElement(By.id(`${product.name}`)).clear();
                        await driver.findElement(By.id(`${product.name}`)).sendKeys('0');
                    });
                }
            });
        });
    });

    describe('The page closing', () => {
        it('should close the page', async () => {
            await driver.sleep(sleepTime);
            await driver.quit();
        });
    })
});
