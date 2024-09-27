const { expect } = require("chai");
const { By, Builder, until } = require("selenium-webdriver");

describe("Intershop", function () {
    
    let driver;

    before(async function() {
        // start browser
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function() {
        // Quit the driver after tests
        await driver.quit();
    });

    it("Basket", async function ()  {
        // open page
        await driver.get("http://intershop5.skillbox.ru/");

        const selectors = {
            searchLine: By.css("input.search-field"),
            searchButton: By.css("i.fa.fa-search"),
            phoneSelection: By.css("a[data-product_id='2103']"),
            productCategory: By.css("li.cat-item-23 > a"),
            firstWatchSelection: By.css("a[data-product_id='15']"),
            watchSelection: By.css("li.product.type-product.post-57.status-publish.instock.product_cat-watch.has-post-thumbnail.sale.shipping-taxable.purchasable.product-type-simple img"),
            addToCartButton: By.css("button.single_add_to_cart_button"),
            detailsButton: By.css("a.button.wc-forward"),
            couponInput: By.css("input#coupon_code"),
            applyCouponButton: By.css("button[name='apply_coupon']"),
            catalogTab: By.css("li.menu-item-46 > a"),
            basketTab: By.css("li#menu-item-29 > a"),
            deleteFirstProduct: By.css("[data-product_id='2103']"),
            deleteCouponButton: By.css("a.woocommerce-remove-coupon"),
            orderButton: By.css("a.checkout-button.button.alt.wc-forward")
        };

        await driver.findElement(selectors.searchLine).sendKeys("Телефон");
        await driver.findElement(selectors.searchButton).click();
        await driver.findElement(selectors.phoneSelection).click();
        await driver.findElement(selectors.productCategory).click();
        await driver.findElement(selectors.firstWatchSelection).click();
        await driver.findElement(selectors.watchSelection).click();
        await driver.findElement(selectors.addToCartButton).click();
        await driver.findElement(selectors.detailsButton).click();
        
        await driver.findElement(selectors.couponInput).sendKeys("sert500");
        await driver.findElement(selectors.applyCouponButton).click();
        
        await driver.findElement(selectors.catalogTab).click();
        await driver.findElement(selectors.basketTab).click();
        await driver.findElement(selectors.deleteFirstProduct).click();
        
        await driver.findElement(selectors.catalogTab).click();
        await driver.findElement(selectors.basketTab).click();
        await driver.findElement(selectors.deleteCouponButton).click();

        await driver.findElement(selectors.catalogTab).click();
        await driver.findElement(selectors.basketTab).click();
        await driver.findElement(selectors.orderButton).click();
    });
});