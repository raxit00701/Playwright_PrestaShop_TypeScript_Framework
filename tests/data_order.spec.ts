import { test, expect } from '@playwright/test';
import { apiLogin } from '../API/apiLogin';
import { apiSignup } from '../API/signup';
import { AddressPage } from '../POM/address'; // ✅ import POM
import fs from 'fs';

// Read JSON + parse
const rawData = fs.readFileSync('./DATA/order.json', 'utf-8');
const orderData = JSON.parse(rawData);

for (const data of orderData) {

    test(`@data Place order - ${data.alias}`, async ({ page }) => {

        const user = await apiSignup();
        await apiLogin(page, user.email, user.password);

        await page.goto('/');

        // 1. Click product
        const productLink = page.locator('.product-title >> text=Hummingbird printed t-shirt');
        await productLink.first().scrollIntoViewIfNeeded();
        await productLink.first().click();

        // 2. Size
        const sizeDropdown = page.getByRole('combobox', { name: /Size/i });
        await sizeDropdown.selectOption({ value: data.size });

        // 3. Color
        await page.getByTitle(data.color, { exact: true }).click();

        // 4. Quantity
        const quantityInput = page.locator('input[name="qty"]');
        await quantityInput.fill(data.quantity);
        await expect(quantityInput).toHaveValue(data.quantity);

        // 5. Add to cart
        await page.getByRole('button', { name: /Add to cart/i }).click();

        // 6. Checkout
        await page.getByRole('link', { name: /Proceed to checkout/i }).click();

        const productSummary = page.locator("//div[@class='product-line-grid']//div[@class='clearfix']");
        await expect(productSummary).toBeVisible();
        console.log("🛒 Product Summary:", await productSummary.textContent());

        await page.getByRole('link', { name: 'Proceed to checkout' }).click();

        // ✅ 7. Use Page Object Factory (NO manual fill now)
        const addressPage = new AddressPage(page);

        await addressPage.fillAddressForm({
            alias: data.alias,
            company: data.company,
            address: data.address,
            address2: data.address2,
            city: data.city,
            state: data.state,
            zip: data.zip,
            country: data.country,
            phone: data.phone
        });

        // 8. Delivery
        const deliveryOption = page.locator("//label[@for='delivery_option_2']//div[@class='row']");
        await expect(deliveryOption).toBeVisible();
        console.log("🚚 Delivery Option:", await deliveryOption.textContent());

        // 9. Cart total
        const cartTotal = page.locator('div.cart-summary-line.cart-total');
        await expect(cartTotal).toBeVisible();
        console.log("💰 Cart Total:", await cartTotal.textContent());

        // 10. Comment
        await page.getByRole('textbox', {
            name: 'If you would like to add a comment about your order, please write it in the field below.'
        }).fill(data.comment);

        // 11. Continue
        await page.getByRole('button', { name: 'Continue' }).click();

        // 12. Payment validation
        const paymentMsg = page.getByText(
            'Unfortunately, there is no payment method available.',
            { exact: true }
        );

        await expect(paymentMsg).toBeVisible();
        console.log("⚠️ Payment Message:", await paymentMsg.textContent());

    });

}