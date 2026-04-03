import { test, expect } from '@playwright/test';
import { apiLogin } from '../API/apiLogin';
import { apiSignup } from '../API/signup';
import { AddressPage } from '../POM/address';  // ✅ import POM

test('@core Place order', async ({ page }) => {

    const user = await apiSignup();
    await apiLogin(page, user.email, user.password);

    await page.goto('/');

    // Product flow (same as before)
    const productLink = page.locator('.product-title >> text=Hummingbird printed t-shirt');
    await productLink.first().scrollIntoViewIfNeeded();
    await productLink.first().click();

    const sizeDropdown = page.getByRole('combobox', { name: /Size/i });
    await sizeDropdown.selectOption({ value: '4' });

    await page.getByTitle('Black', { exact: true }).click();

    const quantityInput = page.locator('input[name="qty"]');
    await quantityInput.fill('4');
    await expect(quantityInput).toHaveValue('4');

    await page.getByRole('button', { name: /Add to cart/i }).click();
    await page.getByRole('link', { name: /Proceed to checkout/i }).click();

    const productSummary = page.locator("//div[@class='product-line-grid']//div[@class='clearfix']");
    await expect(productSummary).toBeVisible();

    await page.getByRole('link', { name: 'Proceed to checkout' }).click();

    // ✅ Use POM here
    const addressPage = new AddressPage(page);

    await addressPage.fillAddressForm({
        alias: 'Home Address',
        company: 'Tech Solutions Pvt Ltd',
        address: '123 Main Street',
        address2: 'Near Central Park',
        city: 'Los Angeles',
        state: 'California',
        zip: '90001',
        country: 'United States',
        phone: '9876543210'
    });

    // Remaining flow (same)
    const deliveryOption = page.locator("//label[@for='delivery_option_2']//div[@class='row']");
    await expect(deliveryOption).toBeVisible();

    const cartTotal = page.locator('div.cart-summary-line.cart-total');
    await expect(cartTotal).toBeVisible();

    await page.getByRole('textbox', {
        name: 'If you would like to add a comment about your order, please write it in the field below.'
    }).fill('Please deliver between 9 AM to 5 PM.');

    await page.getByRole('button', { name: 'Continue' }).click();

    const paymentMsg = page.getByText(
        'Unfortunately, there is no payment method available.',
        { exact: true }
    );

    await expect(paymentMsg).toBeVisible();
});