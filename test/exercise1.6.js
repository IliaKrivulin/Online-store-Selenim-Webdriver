const {expect} = require("chai");
const {By, Builder, until} = require("selenium-webdriver");

describe("Intershop", async function  () {

        it("Registration and authorization testing", async function ()  {

// start browser
let driver = await new Builder().forBrowser("chrome").build()

// open page
await driver.get("http://intershop5.skillbox.ru/");

const entranceClick = By.css("a.account"); // Кнопка "Войти"
const entranceAccountClick = By.css("button.woocommerce-button.button.woocommerce-form-login__submit"); // Кнопка "Войти" в аккаунт
const registrationButton = By.css("button.custom-register-button"); // Кнопка "Зарегестрироваться"
const nameUser = By.css("input#reg_username"); // Поле "Имя пользователя"
const mailUser = By.css("input#reg_email"); // Поле "Адрес почты"
const passwordUser = By.css("input#reg_password"); // Поле "Пароль"
const registrationButtonClick = By.css("button.woocommerce-Button.woocommerce-button.button.woocommerce-form-register__submit"); // Кнопка "Зарегестрироваться"
const exitButtonClick = By.css("a.logout"); // Кнопка "Выйти"
const nameMailField = By.css("input#username"); // Поле для ввода имени пользователя или почты
const passwordField = By.css("input#password"); // Поле для ввода пароля
const entranceButtonClick = By.css("button.woocommerce-button.button.woocommerce-form-login__submit"); // Кнопка "Войти"


await driver.findElement(entranceClick).click(); // Клик по кнопке "Войти"
await driver.findElement(entranceAccountClick).click(); // Клик по кнопке "Войти" в аккаунт
await driver.findElement(registrationButton).click(); // Клик по кнопке "Зарегестрироваться"
await driver.findElement(nameUser).sendKeys("avt6"); // Ввод имени пользователя
await driver.findElement(mailUser).sendKeys("6@skillbox.ru"); // Ввод почты
await driver.findElement(passwordUser).sendKeys("pass1234"); // Ввод пароля
await driver.findElement(registrationButtonClick).click(); // Клик по кнопке "Зарегестрироваться"
await driver.findElement(exitButtonClick).click(); // Клик по кнопке "Выйти"
await driver.findElement(entranceClick).click(); // Клик по кнопке "Войти"
await driver.findElement(nameMailField).sendKeys("6@skillbox.ru"); // Ввод почты
await driver.findElement(passwordField).sendKeys("pass1234"); // Ввод пароля
await driver.findElement(entranceButtonClick).click(); // Клик по кнопке "Войти"


//await driver.quit();


});
});