const { expect } = require("chai");
const { By, Builder, until } = require("selenium-webdriver");

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

    it("Catalog", async function () {
        // open page
        await driver.get("http://intershop5.skillbox.ru/");

        const searchLine = By.css("input.search-field");
        const searchButtonClick = By.css("i.fa.fa-search");
        const phoneSelectionClick = By.css("a[data-product_id='2103']");
        const productCategoryClick = By.css("li.cat-item-23 > a");
        const watchSelectionClick = By.css("li.product.type-product.post-57.status-publish.instock.product_cat-watch.has-post-thumbnail.sale.shipping-taxable.purchasable.product-type-simple img");
        const reviewsClick = By.css("li#tab-title-reviews");
        const addToCartClick = By.css("button.single_add_to_cart_button");
        const detailsButtonClick = By.css("a.button.wc-forward");

        try {
            await driver.wait(until.elementLocated(searchLine), 10000);
            await driver.findElement(searchLine).sendKeys("Телефон");
            await driver.findElement(searchButtonClick).click();

            await driver.wait(until.elementLocated(phoneSelectionClick), 10000);
            await driver.findElement(phoneSelectionClick).click();

            await driver.wait(until.elementLocated(productCategoryClick), 10000);
            await driver.findElement(productCategoryClick).click();

            await driver.wait(until.elementLocated(watchSelectionClick), 10000);
            await driver.findElement(watchSelectionClick).click();

            await driver.wait(until.elementLocated(reviewsClick), 10000);
            await driver.findElement(reviewsClick).click();

            await driver.wait(until.elementLocated(addToCartClick), 10000);
            await driver.findElement(addToCartClick).click();

            await driver.wait(until.elementLocated(detailsButtonClick), 10000);
            await driver.findElement(detailsButtonClick).click();
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });
});
