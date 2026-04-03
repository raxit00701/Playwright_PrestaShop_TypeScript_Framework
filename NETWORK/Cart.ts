import { BrowserContext, Route } from '@playwright/test';

// ✅ Define the mock response (extracted from your network capture)
const cartMockResponse = {
    success: true,
    id_product: 7,
    id_product_attribute: 0,
    id_customization: 0,
    quantity: 10,
    cart: {
        products: [
            {
                id: 7,
                name: "Mug The adventure begins",
                quantity: 10,
                price: "€11.90",
                total: "€119.00",
                total_wt: 119,
                price_wt: 11.9,
                stock_quantity: 300,
                reference: "demo_12",
                cart_quantity: 10,
            }
        ],
        totals: {
            total: { type: "total", label: "Total", amount: 126, value: "€126.00" },
            total_including_tax: { type: "total", label: "Total (tax incl.)", amount: 126, value: "€126.00" },
            total_excluding_tax: { type: "total", label: "Total (tax excl.)", amount: 126, value: "€126.00" }
        },
        subtotals: {
            products: { type: "products", label: "Subtotal", amount: 119, value: "€119.00" },
            shipping: { type: "shipping", label: "Shipping", amount: 7, value: "€7.00" },
            discounts: null,
            tax: null
        },
        products_count: 10,
        summary_string: "10 items",
    },
    errors: ""
};

export async function mockCart(context: BrowserContext): Promise<void> {
    await context.route('**/cart**', async (route: Route) => {
        const request = route.request();
        const method = request.method();
        const postData = request.postData() ?? '';

        console.log('➡️ URL:', request.url());
        console.log('➡️ METHOD:', method);
        console.log('➡️ BODY:', postData);

        const params = new URLSearchParams(postData);

        const isAddToCart =
            method === 'POST' &&
            params.get('add') === '1' &&
            params.get('action') === 'update';

        if (isAddToCart) {
            console.log('🟢 MOCK HIT: Add to Cart');
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(cartMockResponse),
            });
        } else {
            await route.continue();
        }
    });
}