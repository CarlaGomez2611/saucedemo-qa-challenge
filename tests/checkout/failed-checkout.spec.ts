import { test, expect } from '@playwright/test';

test('failed checkout', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.locator('[data-test="username"]').fill('performance_glitch_user');

await page.locator('[data-test="password"]').fill('secret_sauce');

await page.locator('[data-test="login-button"]').click();

await expect(page).toHaveURL(/inventory.html/);

await page.locator('[data-test="item-4-title-link"]').click();

await page.locator('[data-test="add-to-cart"]').click();

await page.locator('[data-test="back-to-products"]').click();
  
await page.locator('[data-test="shopping-cart-link"]').click();

await page.locator('[data-test="checkout"]').click();

await page.locator('[data-test="firstName"]').fill('');

await page.locator('[data-test="lastName"]').fill('');

await page.locator('[data-test="postalCode"]').fill('');

await page.locator('[data-test="continue"]').click();

await page.locator('[data-test="finish"]').click();

await expect(page.locator('[data-test="error-button"]')).toBeVisible();

});