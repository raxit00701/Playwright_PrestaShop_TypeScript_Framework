import { test, expect } from '@playwright/test';
import { apiLogin } from '../API/apiLogin';
import { apiSignup } from '../API/signup';
import { mockCart } from '../NETWORK/Cart';

test('@net Cart Mocking - Pricing Validation', async ({ page }) => {

    const user = await apiSignup();
    await apiLogin(page, user.email, user.password);
    await page.goto('/7-mug-the-adventure-begins.html');
    await page.locator('#quantity_wanted').fill('10');

    // ✅ Set up the listener BEFORE the click that triggers it
    const responsePromise = page.waitForResponse((resp) =>
        resp.url().includes('/cart') &&
        resp.request().method() === 'POST'
    );

    await page.locator('button.add-to-cart').click();

    // ✅ Now await the already-listening promise
    await responsePromise;

    const modal = page.locator('#blockcart-modal');
    await expect(modal).toBeVisible();

    // ✅ Validate pricing from mock response
    await expect(modal).toContainText('Mug The adventure begins');
    await expect(modal).toContainText('€11.90');                    // unit price
    await expect(modal).toContainText('Quantity: 10');
    await expect(modal).toContainText('Subtotal: €119.00');         // ✅ shown
    await expect(modal).toContainText('Total (tax incl.) €119.00'); // ✅ shown
    await expect(modal).toContainText('There are 10 items in your cart.');


});