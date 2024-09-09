const {expect} = require("chai");
const {By, Builder, until} = require("selenium-webdriver");

describe("Intershop", async function  () {

        it("Catalog", async function ()  {

// start browser
let driver = await new Builder().forBrowser("chrome").build()

// open page
await driver.get("http://intershop5.skillbox.ru/");


const searchLine = By.css("input.search-field"); // Строка для поиска
const searchButtonClick = By.css("i.fa.fa-search"); // Кнопка поиска
const phoneSelectionClick = By.css("a[data-product_id='2103']"); // Кнопка "В корзину"
const productCategoryClick = By.css("li.cat-item-23 > a"); // Категория "Часы"
const watchSelectionClick = By.css("li.product.type-product.post-57.status-publish.instock.product_cat-watch.has-post-thumbnail.sale.shipping-taxable.purchasable.product-type-simple img"); //Выбор часов
const reviewsClick = By.css("li#tab-title-reviews"); // Кнопка "Отзывы" у часов
const addToCartClick = By.css("button.single_add_to_cart_button");
const detailsButtonClick = By.css("a.button.wc-forward"); // Кнопка "Подробнее"



await driver.findElement(searchLine).sendKeys("Телефон"); // Ввод данных в строку поиска
await driver.findElement(searchButtonClick).click(); // Выполнение поиска
await driver.findElement(phoneSelectionClick).click(); // Добавление товара в корзину(телефона)
await driver.findElement(productCategoryClick).click(); // Выбор категории "Часы"
await driver.findElement(watchSelectionClick).click(); // Выбор часов
await driver.findElement(reviewsClick).click(); // Выбор отзывов у часов
await driver.findElement(addToCartClick).click(); // Добавление часов в корзину
await driver.findElement(detailsButtonClick).click(); // Клик по кнопке "Подробнее" для перехода в корзину

//await driver.quit(); // Закрытие вкладки страницы


});
});
