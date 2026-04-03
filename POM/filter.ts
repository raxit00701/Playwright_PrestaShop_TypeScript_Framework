import { Page, Locator } from '@playwright/test';

export class FilterPage {
    readonly accessoriesLink: Locator;
    readonly sortLabel: Locator;
    readonly sortDropdown: Locator;

    readonly priceHighToLow: Locator;
    readonly nameAToZ: Locator;

    readonly prices: Locator;
    readonly productTitles: Locator;

    constructor(page: Page) {
        this.accessoriesLink = page.locator('a').filter({ hasText: 'Accessories' }).first();
        this.sortLabel = page.getByText('Sort by:', { exact: true });
        this.sortDropdown = page.getByRole('button', { name: 'Sort by selection' });

        this.priceHighToLow = page.getByRole('link', { name: 'Price, high to low' });
        this.nameAToZ = page.getByRole('link', { name: 'Name, A to Z' });

        this.prices = page.locator('#products .price');
        this.productTitles = page.locator('#products .product-title');
    }
}