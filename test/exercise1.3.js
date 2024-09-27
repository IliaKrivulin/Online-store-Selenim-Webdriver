const { expect } = require("chai");
const { By, Builder, until } = require("selenium-webdriver");

describe("Intershop", function() {
    let driver;

    // Инициализация браузера перед тестами
    before(async function() {
        driver = await new Builder().forBrowser("chrome").build();
    });

    // Закрытие браузера после тестов
    after(async function() {
        await driver.quit();
    });

    it("Home page testing", async function() {
        // Открытие страницы
        await driver.get("http://intershop5.skillbox.ru/");

        const homeClick = By.css("ul#menu-primary-menu > li#menu-item-26"); // Кнопка "Главная"
        const bookSectionClick = By.css("aside#accesspress_storemo-2 div:nth-child(2)"); // Раздел с книгами
        const tabletsSectionClick = By.css("aside#accesspress_storemo-3 div:nth-child(2)"); // Раздел с планшетами
        const camerasSectionClick = By.css("aside#accesspress_storemo-4 div:nth-child(2)"); // Раздел с фотоаппаратами

        // Переход в раздел с книгами
        await driver.findElement(bookSectionClick).click();
        expect(await driver.getCurrentUrl()).to.equal("http://intershop5.skillbox.ru/product-category/catalog/books/", "Wrong Url");

        // Переход на главную
        await driver.findElement(homeClick).click();

        // Переход в раздел с планшетами
        await driver.findElement(tabletsSectionClick).click();
        expect(await driver.getCurrentUrl()).to.equal("http://intershop5.skillbox.ru/product-category/catalog/electronics/pad/", "Wrong Url");

        // Переход на главную
        await driver.findElement(homeClick).click();

        // Переход в раздел с фотоаппаратами
        await driver.findElement(camerasSectionClick).click();
        expect(await driver.getCurrentUrl()).to.equal("http://intershop5.skillbox.ru/product-category/catalog/electronics/photo_video/", "Wrong Url");

        // Переход на главную
        await driver.findElement(homeClick).click();
        expect(await driver.getCurrentUrl()).to.equal("http://intershop5.skillbox.ru/", "Wrong Url");
    });
});
