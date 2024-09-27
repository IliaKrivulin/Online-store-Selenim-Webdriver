const {expect} = require("chai");
const {By, Builder, until} = require("selenium-webdriver");

describe("Intershop", function () {
    let driver;

    before(async function () {
        // start browser
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function () {
        // close browser
        await driver.quit();
    });

    it("Registration and authorization testing", async function () {
        try {
            // open page
            await driver.get("http://intershop5.skillbox.ru/");

            const entranceClick = By.css("a.account"); 
            const entranceAccountClick = By.css("button.woocommerce-button.button.woocommerce-form-login__submit");
            const registrationButton = By.css("button.custom-register-button");
            const nameUser = By.css("input#reg_username");
            const mailUser = By.css("input#reg_email");
            const passwordUser = By.css("input#reg_password");
            const registrationButtonClick = By.css("button.woocommerce-Button.woocommerce-button.button.woocommerce-form-register__submit");
            const exitButtonClick = By.css("a.logout"); 
            const nameMailField = By.css("input#username");
            const passwordField = By.css("input#password");
            const entranceButtonClick = By.css("button.woocommerce-button.button.woocommerce-form-login__submit");

            await driver.findElement(entranceClick).click();
            await driver.findElement(entranceAccountClick).click();
            await driver.findElement(registrationButton).click(); 
            await driver.findElement(nameUser).sendKeys("avt6");
            await driver.findElement(mailUser).sendKeys("6@skillbox.ru");
            await driver.findElement(passwordUser).sendKeys("pass1234");
            await driver.findElement(registrationButtonClick).click();
            await driver.findElement(exitButtonClick).click();
            await driver.findElement(entranceClick).click();
            await driver.findElement(nameMailField).sendKeys("6@skillbox.ru");
            await driver.findElement(passwordField).sendKeys("pass1234");
            await driver.findElement(entranceButtonClick).click();
        } catch (error) {
            console.error(error);
            throw error;
        }
    });
});