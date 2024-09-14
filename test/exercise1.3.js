const {expect} = require("chai");
const {By, Builder, until} = require("selenium-webdriver");

describe("Intershop", async function  () {

        it("Home page testing", async function ()  {

// start browser
let driver = await new Builder().forBrowser("chrome").build()

// open page
await driver.get("http://intershop5.skillbox.ru/");

const homeClick = By.css("ul#menu-primary-menu > li#menu-item-26"); //Кнопка "Главная"
const bookSectionClick = By.css("aside#accesspress_storemo-2 div:nth-child(2)"); //Раздел с книгами
const tabletsSectionClick = By.css("aside#accesspress_storemo-3 div:nth-child(2)"); // Раздел с планшетами
const camerasSectionClick = By.css("aside#accesspress_storemo-4 div:nth-child(2)"); //Раздел с фотоаппаратами

await driver.findElement(bookSectionClick).click(); // 1.Переход в раздел с книгами
expect(await driver.getCurrentUrl()).to.be.equal("http://intershop5.skillbox.ru/product-category/catalog/books/", "Wrong Url"); // 2.Сравнение Url раздела с книгами
await driver.findElement(homeClick).click(); // 3.Переход на главную
await driver.findElement(tabletsSectionClick).click(); //4.Переход в раздел с планшетами
expect(await driver.getCurrentUrl()).to.be.equal("http://intershop5.skillbox.ru/product-category/catalog/electronics/pad/", "Wrong Url"); // 5.Сравнение Url раздела с планшетами
await driver.findElement(homeClick).click(); // 6.Переход на главную
await driver.findElement(camerasSectionClick).click(); // 7.Переход в раздел с фотоаппаратами
expect(await driver.getCurrentUrl()).to.be.equal("http://intershop5.skillbox.ru/product-category/catalog/electronics/photo_video/", "Wrong Url"); // 8.Сравнение Url раздела с фотоаппаратами
await driver.findElement(homeClick).click(); // 9.Переход на главную
expect(await driver.getCurrentUrl()).to.be.equal("http://intershop5.skillbox.ru/", "Wrong Url"); // 10.Сравнение Url раздела с фотоаппаратами
});
});
