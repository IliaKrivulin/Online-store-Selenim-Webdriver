const { expect } = require("chai");
const { By, Builder, until } = require("selenium-webdriver");

describe("Intershop", function () {

    let driver;

    before(async function() {
        // start browser
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function() {
        // закрыть браузер после завершения тестов
        await driver.quit();
    });

    it("Checkout testing", async function () {

        // open page
        await driver.get("http://intershop5.skillbox.ru/");

        const entranceClick = By.css("a.account");
        const nameMailField = By.css("input#username");
        const passwordField = By.css("input#password");
        const entranceButtonClick = By.css("button.woocommerce-button.button.woocommerce-form-login__submit");
        const catalogClick = By.css("li.menu-item-46 > a");
        const productCategoryClick = By.css("li.cat-item-23 > a");
        const firstwatchSelectionClick = By.css("a[data-product_id='15']");
        const basketClick = By.css("li#menu-item-29 > a");
        const couponInputField = By.css("input#coupon_code");
        const applyCouponClick = By.css("button[name='apply_coupon']");
        const buttonOrderClick = By.css("a.checkout-button.button.alt.wc-forward");

        // Оформление заказа
        const nameField = By.css("input#billing_first_name");
        const surnameField = By.css("input#billing_last_name");
        const addressField = By.css("input#billing_address_1");
        const cityField = By.css("input#billing_city");
        const regionField = By.css("input#billing_state");
        const postCodeField = By.css("input#billing_postcode");
        const phoneField = By.css("input#billing_phone");
        const commentsField = By.css("textarea#order_comments");
        const checkoutButton = By.css("button#place_order");

        await driver.wait(until.elementLocated(entranceClick), 10000);
        await driver.findElement(entranceClick).click();
        await driver.findElement(nameMailField).sendKeys("2@skillbox.ru");
        await driver.findElement(passwordField).sendKeys("pass1234");
        await driver.findElement(entranceButtonClick).click();

        await driver.wait(until.elementLocated(catalogClick), 10000);
        await driver.findElement(catalogClick).click();
        await driver.wait(until.elementLocated(productCategoryClick), 10000);
        await driver.findElement(productCategoryClick).click();
        await driver.wait(until.elementLocated(firstwatchSelectionClick), 10000);
        await driver.findElement(firstwatchSelectionClick).click();
        
        await driver.wait(until.elementLocated(basketClick), 10000);
        await driver.findElement(basketClick).click();
        await driver.findElement(couponInputField).sendKeys("sert500");
        await driver.findElement(applyCouponClick).click();

        await driver.wait(until.elementLocated(catalogClick), 10000);
        await driver.findElement(catalogClick).click();
        await driver.wait(until.elementLocated(basketClick), 10000);
        await driver.findElement(basketClick).click();
        await driver.findElement(buttonOrderClick).click();

        // Ввод текста в поля
        await driver.wait(until.elementLocated(nameField), 10000);
        await driver.findElement(nameField).sendKeys("Тестовый");
        await driver.findElement(surnameField).sendKeys("Пользователь");
        await driver.findElement(addressField).sendKeys("Улица Тестовая д.1 кв.1");
        await driver.findElement(cityField).sendKeys("Тестовый");
        await driver.findElement(regionField).sendKeys("Тестовая");
        await driver.findElement(postCodeField).sendKeys("197197");
        await driver.findElement(phoneField).sendKeys("+79998887766");
        await driver.findElement(commentsField).sendKeys("Это было интересное задание!");
        await driver.findElement(checkoutButton).click();
    });
});