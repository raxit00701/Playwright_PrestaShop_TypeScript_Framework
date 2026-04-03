import { test, expect } from '@playwright/test';
import { apiSignup } from '../API/signup';
import { apiLogin } from '../API/apiLogin';

test('@api Signup + Login API + UI validation', async ({ page }) => {

    const user = await apiSignup();

    // ✅ Pass the credentials from the signed-up user
    await apiLogin(page, user.email, user.password);

    await page.goto('/');

    const fullName = `${user.firstName} ${user.lastName}`;
    const accountName = page.locator(`//span[normalize-space()='${fullName}']`);

    await expect(accountName).toBeVisible();
});