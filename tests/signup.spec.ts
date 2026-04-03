import { test, expect } from '@playwright/test';
import { apiSignup } from '../API/signup';
import { apiLogin } from '../API/apiLogin';

test('@api Signup API + UI validation', async ({ page }) => {

    const user = await apiSignup();

    // login using the same credentials
    await apiLogin(page, user.email, user.password);

    await page.goto('/');

    const fullName = `${user.firstName} ${user.lastName}`;

    const accountName = page.locator(`//span[normalize-space()='${fullName}']`);

    const nameText = await accountName.textContent();

    console.log("👤 Logged in user:", nameText);

    await expect(accountName).toBeVisible();
});