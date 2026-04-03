import { request, expect } from '@playwright/test';

export async function addProductToCart(apiContext: any, token: string) {

    const response = await apiContext.post('/cart', {
        headers: {
            "x-requested-with": "XMLHttpRequest"
        },
        form: {
            token: token,
            id_product: '1',
            id_customization: '0',
            'group[1]': '1',
            'group[2]': '8',
            qty: '1',
            add: '1',
            action: 'update'
        }
    });

    expect(response.status()).toBe(200);

    console.log("Product added to cart");
}