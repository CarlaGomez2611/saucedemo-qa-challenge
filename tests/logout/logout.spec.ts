import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pageobjects/login/LoginPage";

test('logout', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect (page).toHaveURL(/inventory.html/);

    await page.getByRole('button', { name: 'Open Menu' }).click();

    await page.locator('[data-test=logout-sidebar-link]').click();

    await expect(page).toHaveURL(/saucedemo.com/);



});