import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pageobjects/login/LoginPage";
import { CheckoutPage } from "../../pageobjects/CheckoutPage";

test('checkout', async ({ page }) => {

const loginPage = new LoginPage(page);

const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

    await page.locator('[data-test="item-4-title-link"]').click();

    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="back-to-products"]').click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await page.locator('[data-test="checkout"]').click();

    await checkoutPage.fillInformation('Carla', 'test', '12345');

    await checkoutPage.continue();

    await checkoutPage.finish();

    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');


});