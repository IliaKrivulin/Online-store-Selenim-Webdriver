const {expect} = require("chai");
const {By, Builder, until} = require("selenium-webdriver");

describe("Intershop", async function  () {

        it("Basket", async function ()  {

// start browser
let driver = await new Builder().forBrowser("chrome").build()

// open page
await driver.get("http://intershop5.skillbox.ru/");


const searchLine = By.css("input.search-field"); // Строка для поиска
const searchButtonClick = By.css("i.fa.fa-search"); // Кнопка поиска
const phoneSelectionClick = By.css("a[data-product_id='2103']"); // Кнопка "В корзину"
const productCategoryClick = By.css("li.cat-item-23 > a"); // Категория "Часы"
const firstwatchSelectionClick = By.css("a[data-product_id='15']"); // Кнопка "В корзину" для первых часов
const watchSelectionClick = By.css("li.product.type-product.post-57.status-publish.instock.product_cat-watch.has-post-thumbnail.sale.shipping-taxable.purchasable.product-type-simple img"); //Выбор часов
const addToCartClick = By.css("button.single_add_to_cart_button");
const detailsButtonClick = By.css("a.button.wc-forward"); // Кнопка "Подробнее"
const couponInputField = By.css("input#coupon_code"); // Поле для ввода купона.
const applyCouponClick = By.css("button[name='apply_coupon']");  // Кнопка "Применить купон"
const catalogClick = By.css("li.menu-item-46 > a"); // вкладка "Каталог"
const basketClick = By.css("li#menu-item-29 > a") // вкладка "Корзина"
const deleteFirstProductLocator = By.css("[data-product_id = '2103']") // Крестик для удаления товара
const buttonDeleteCouponClick = By.css("a.woocommerce-remove-coupon") // Кнопка "Удалить" для купона
const buttonOrderClick = By.css("a.checkout-button.button.alt.wc-forward"); // Кнопка "Оформить заказ"


await driver.findElement(searchLine).sendKeys("Телефон"); // Ввод данных в строку поиска
await driver.findElement(searchButtonClick).click(); // Выполнение поиска
await driver.findElement(phoneSelectionClick).click(); // Добавление товара в корзину(телефона)
await driver.findElement(productCategoryClick).click(); // Выбор категории "Часы"
await driver.findElement(firstwatchSelectionClick).click(); // Добавление в корзину первых часов
await driver.findElement(watchSelectionClick).click(); // Выбор часов
await driver.findElement(addToCartClick).click(); // Добавление часов в корзину
await driver.findElement(detailsButtonClick).click(); // Клик по кнопке "Подробнее" для перехода в корзину
await driver.findElement(couponInputField).sendKeys("sert500"); // Ввод купона
await driver.findElement(applyCouponClick).click(); // Клик на кнопку "Применить купон"
await driver.findElement(catalogClick).click(); // Клик по вкладке "Каталог"
await driver.findElement(basketClick).click(); // Клик по вкладке "Корзина"
await driver.findElement(deleteFirstProductLocator).click();
await driver.findElement(catalogClick).click(); // Клик по вкладке "Каталог"
await driver.findElement(basketClick).click(); // Клик по вкладке "Корзина"
await driver.findElement(buttonDeleteCouponClick).click(); // Клик по кнопке "Удалить" для купона
await driver.findElement(catalogClick).click(); // Клик по вкладке "Каталог"
await driver.findElement(basketClick).click(); // Клик по вкладке "Корзина"
await driver.findElement(buttonOrderClick).click(); // Оформить заказ


});
});