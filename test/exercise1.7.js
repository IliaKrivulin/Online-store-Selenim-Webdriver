const {expect} = require("chai");
const {By, Builder, until} = require("selenium-webdriver");

describe.only("Intershop", async function  () {

        it("Checkout testing", async function ()  {

// start browser
let driver = await new Builder().forBrowser("chrome").build()

// open page
await driver.get("http://intershop5.skillbox.ru/");


const entranceClick = By.css("a.account"); // Кнопка "Войти"
const nameMailField = By.css("input#username"); // Поле для ввода имени пользователя или почты
const passwordField = By.css("input#password"); // Поле для ввода пароля
const entranceButtonClick = By.css("button.woocommerce-button.button.woocommerce-form-login__submit"); // Кнопка "Войти"
const catalogClick = By.css("li.menu-item-46 > a"); // вкладка "Каталог"
const productCategoryClick = By.css("li.cat-item-23 > a"); // Категория "Часы"
const firstwatchSelectionClick = By.css("a[data-product_id='15']"); // Кнопка "В корзину" для первых часов
const basketClick = By.css("li#menu-item-29 > a") // вкладка "Корзина"
const couponInputField = By.css("input#coupon_code"); // Поле для ввода купона.
const applyCouponClick = By.css("button[name='apply_coupon']");  // Кнопка "Применить купон"
const buttonOrderClick = By.css("a.checkout-button.button.alt.wc-forward"); // Кнопка "Оформить заказ"

// Оформление заказа
const nameField = By.css("input#billing_first_name"); // Поле ввода имени
const surnameField = By.css("input#billing_last_name"); // Поле ввода фамилии
const addressField = By.css("input#billing_address_1"); // Поле ввода адреса
const cityField = By.css("input#billing_city"); // Поле для ввода города / населённого пункта
const regionField = By.css("input#billing_state"); // Поле для ввода обсласти
const postCodeField = By.css("input#billing_postcode"); // Поле для ввода почтового индекса
const phoneField = By.css("input#billing_phone"); // Поле для ввода телефона
const commentsField = By.css("textarea#order_comments") // Поле для ввода комментария

const checkoutButton = By.css("button#place_order") // Кнопка "Оформить заказ"


await driver.findElement(entranceClick).click();
await driver.findElement(nameMailField).sendKeys("2@skillbox.ru"); // Ввод почты
await driver.findElement(passwordField).sendKeys("pass1234"); // Ввод пароля
await driver.findElement(entranceButtonClick).click(); // Клик по кнопке "Войти"
await driver.findElement(catalogClick).click(); // Клик по вкладке "Каталог"
await driver.findElement(productCategoryClick).click(); // Выбор категории "Часы"
await driver.findElement(firstwatchSelectionClick).click(); // Добавление в корзину первых часов
await driver.findElement(basketClick).click(); // Клик по вкладке "Корзина"
await driver.findElement(couponInputField).sendKeys("sert500"); // Ввод купона
await driver.findElement(applyCouponClick).click(); // Клик на кнопку "Применить купон"
await driver.findElement(catalogClick).click(); // Клик по вкладке "Каталог"
await driver.findElement(basketClick).click(); // Клик по вкладке "Корзина"
await driver.findElement(buttonOrderClick).click(); // Оформить заказ

// Ввод текста в поля
await driver.findElement(nameField).sendKeys("Тестовый"); // Ввод имен
await driver.findElement(surnameField).sendKeys("Пользователь"); // Ввод фамилии
await driver.findElement(addressField).sendKeys("Улица Тестовая д.1 кв.1"); // Ввод адреса
await driver.findElement(cityField).sendKeys("Тестовый"); // Ввод города
await driver.findElement(regionField).sendKeys("Тестовая"); // Ввод области
await driver.findElement(postCodeField).sendKeys("197197"); // Ввод индекса
await driver.findElement(phoneField).sendKeys("+79998887766"); // Ввод номера телефона
await driver.findElement(commentsField).sendKeys("Это было интересное задание!"); // Ввод комментария
await driver.findElement(checkoutButton).click(); // Клик по кнопке "Оформить заказ"


//await driver.quit();


});
});