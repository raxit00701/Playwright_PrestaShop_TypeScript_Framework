import { expect, request } from '@playwright/test';

export async function apiSearch() {

    const apiContext = await request.newContext({
        baseURL: 'http://localhost:8081'
    });

    const searchResponse = await apiContext.get('/search', {
        params: {
            controller: 'search',
            s: 'best'
        }
    });

    console.log("Search API Status:", searchResponse.status());

    expect(searchResponse.status()).toBe(200);

    console.log("✅ Search API executed successfully");
}