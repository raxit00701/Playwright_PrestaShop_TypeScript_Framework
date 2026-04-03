import { test, expect } from '@playwright/test';
import { apiLogin } from '../API/apiLogin';
import { apiSignup } from '../API/signup';

// ── Group: GEN ────────────────────────────────────────────────────────────────
// This file lives under  tests/gen/  so it is picked up automatically when
// GROUP=gen is set.  The @gen annotation also lets you target it via --grep
// without moving the file:
//   npx playwright test --grep "@gen"
// ─────────────────────────────────────────────────────────────────────────────

test('@gen Coursel arrows check', async ({ page }) => {
    const user = await apiSignup();
    await apiLogin(page, user.email, user.password);

    await page.goto('/');

    // Next arrow locator
    const nextArrow = page.locator("//div[@class=\"direction\"]/a[@class=\"right carousel-control\"]");

    // Previous arrow locator
    const prevArrow = page.locator("//div[@class=\"direction\"]/a[@class=\"left carousel-control\"]");

    // Verify Sample 1 is visible before clicking
    await page.waitForTimeout(2000);
    const sample1 = page.locator("//h2[text()='Sample 1']");
    await expect(sample1).toBeVisible();
    console.log("✅ Sample 1 is visible");

    // Click NEXT arrow 2 times
    for (let i = 0; i < 2; i++) {

        await nextArrow.click();
        await page.waitForTimeout(2000);

        if (i === 0) {
            const sample2 = page.locator("//h2[text()='Sample 2']");
            await expect(sample2).toBeVisible();
            console.log("✅ After 1st click → Sample 2 is visible");
        }

        if (i === 1) {
            const sample3 = page.locator("//h2[text()='Sample 3']");
            await expect(sample3).toBeVisible();
            console.log("✅ After 2nd click → Sample 3 is visible");
        }
    }

    // Click PREVIOUS arrow 2 times
    for (let i = 0; i < 2; i++) {
        await prevArrow.click();
        await page.waitForTimeout(2000);
    }

});