import { test, expect } from '@playwright/test';
import { apiLogin } from '../API/apiLogin';
import { apiSignup } from '../API/signup';
import { FilterPage } from '../POM/filter';

test('@gen Filter functionality', async ({ page }) => {

    const filter = new FilterPage(page);

    const user = await apiSignup();
    await apiLogin(page, user.email, user.password);

    await page.goto('/');

    // Click Accessories
    await filter.accessoriesLink.click();

    // ================================
    // Sort by Price High to Low
    // ================================
    await filter.sortLabel.scrollIntoViewIfNeeded();

    const firstPriceBefore = await filter.prices.first().textContent();

    await filter.sortDropdown.click();
    await filter.priceHighToLow.click();

    console.log("🔽 Sort: Price high to low");

    // ✅ WAIT FOR UI CHANGE (IMPORTANT FIX)
    await expect(filter.prices.first()).not.toHaveText(firstPriceBefore!);

    const prices = await filter.prices.allTextContents();
    const cleanPrices = prices.map(p => p.trim());

    console.log(cleanPrices);

    // Assertion
    const numericPrices = cleanPrices.map(p => parseFloat(p.replace('€', '')));
    const sortedDesc = [...numericPrices].sort((a, b) => b - a);

    expect(numericPrices).toEqual(sortedDesc);

    // ================================
    // Sort by Name A-Z
    // ================================
    await filter.sortLabel.scrollIntoViewIfNeeded();

    const firstNameBefore = await filter.productTitles.first().textContent();

    await filter.sortDropdown.click();
    await filter.nameAToZ.click();

    console.log("🔤 Sort: Name A-Z");

    // ✅ WAIT FOR UI CHANGE
    await expect(filter.productTitles.first()).not.toHaveText(firstNameBefore!);

    const products = await filter.productTitles.allTextContents();
    console.log(products);

    const sortedNames = [...products].sort();
    expect(products).toEqual(sortedNames);
});