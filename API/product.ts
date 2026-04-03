import { request, expect } from '@playwright/test';

export async function openProduct(apiContext: any) {

    const response = await apiContext.get('/1-1-hummingbird-printed-t-shirt.html');

    expect(response.status()).toBe(200);

    const html = await response.text();

    // extract dynamic cart token
    const tokenMatch = html.match(/name="token"\s+value="(.*?)"/);

    if (!tokenMatch) {
        throw new Error("Cart token not found");
    }

    const token = tokenMatch[1];

    console.log("Extracted token:", token);

    return token;
}