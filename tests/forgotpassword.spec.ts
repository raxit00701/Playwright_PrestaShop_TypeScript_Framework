import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('@gen Forgot Password functionality', async ({ page }) => {

    // Read email generated during signup
    const filePath = path.join(process.cwd(), 'DATA', 'test-data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const email = data.email;

    console.log("📧 Using signup email:", email);

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open login page
    await page.locator('span:has-text("Sign in")').click();

    // Click Forgot Password
    await page.getByRole('link', { name: 'Forgot your password?' }).click();

    // Fill email
    await page.locator('#email').fill(email);

    // Click Send reset link
    await page.getByRole('button', { name: 'Send reset link' }).click();

    // Validate success message
    const successMessage = page.getByText('abcd');


    await expect(successMessage).toBeVisible();

    console.log("✅ Password reset email has error message");

});