import { test, expect } from '@playwright/test';
import { apiSignup } from '../API/signup';
import { apiLogin } from '../API/apiLogin';
import { openProduct } from '../API/product';
import { addProductToCart } from '../API/addToCart';

test('@core Add product to cart via API + Cart validation', async ({ page }) => {

    // create a new user

    const user = await apiSignup();

    // login using that user
    const apiContext =  await apiLogin(page, user.email, user.password);

    // open product page and extract token
    const token = await openProduct(apiContext);

    // add product to cart
    await addProductToCart(apiContext, token);

    // open cart page
    await page.goto('http://localhost:8081/cart?action=show');
    await page.reload();

    const productLocator = page.locator("//a[normalize-space()='Hummingbird printed t-shirt']");

    await expect(productLocator).toBeVisible();

    const productName = await productLocator.textContent();

    console.log("Product in cart:", productName);

});