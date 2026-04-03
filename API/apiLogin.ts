import { expect, Page, APIRequestContext } from '@playwright/test';

export let sessionCookie: any;
export let sessionToken: string | undefined;

export async function apiLogin(page: Page, email: string, password: string): Promise<APIRequestContext> {

    const apiContext = page.request;

    const loginResp = await apiContext.post('http://localhost:8081/login', {
        form: {
            back: 'http://localhost:8081/',
            email: email,
            password: password,
            submitLogin: '1'
        }
    });

    expect(loginResp.status()).toBe(200);

    // ✅ Check final URL - reliable way to detect failed login
    const finalUrl = loginResp.url();
    const isLoginPage = finalUrl.includes('controller=authentication') ||
        finalUrl.includes('/login');

    if (isLoginPage) {
        throw new Error('❌ API Login failed - redirected back to login page');
    }

    const storage = await apiContext.storageState();

    sessionCookie = storage.cookies.find(c =>
        c.name.startsWith('PrestaShop')
    );

    sessionToken = sessionCookie?.value;

    console.log("🍪 Session Cookie:", sessionCookie);
    console.log("🔑 Session Token:", sessionToken);

    await page.context().addCookies(storage.cookies);

    console.log("✅ API Login successful");

    return apiContext;
}