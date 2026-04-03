import { test } from '@playwright/test';
import { apiLogin } from '../API/apiLogin';
import { apiSearch } from '../API/search';
import {apiSignup} from "../API/signup";

test('@api Search functionality API + UI validation', async ({ page }) => {
    const user = await apiSignup();
    await apiLogin(page, user.email, user.password);

    // API validation
    await apiSearch();

    // open search results page
    await page.goto('/search?controller=search&s=best');

    // locate products container
    const productContainer = page.locator("//div[@class='products row']");

    // wait until products load
    await productContainer.waitFor();

    // get all product titles inside the container
    const productTitles = productContainer.locator(".product-title");

    const count = await productTitles.count();

    console.log("Total products found:", count);

    for (let i = 0; i < count; i++) {
        const productName = await productTitles.nth(i).textContent();
        console.log("Product:", productName?.trim());
    }

});