import { expect, request } from '@playwright/test';

export async function apiSignup() {

    const apiContext = await request.newContext({
        baseURL: 'http://localhost:8081'
    });

    const firstNames = ["Aarav","Vivaan","Aditya","Arjun","Rohan","Ishaan"];
    const lastNames = ["Sharma","Verma","Patel","Singh","Gupta","Mehta"];

    const firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random()*lastNames.length)];

    const email = `user${Date.now()}@test.com`;
    const password = 'Password@#12345';

    const response = await apiContext.post('/registration', {
        form: {
            id_gender: '1',
            firstname: firstName,
            lastname: lastName,
            email,
            password,
            birthday: '05/31/1970',
            psgdpr: '1',
            customer_privacy: '1',
            submitCreate: '1'
        }
    });

    expect(response.status()).toBe(200);

    console.log("✅ Signup:", firstName, lastName);
    console.log("📧 Email:", email);

    return {
        firstName,
        lastName,
        email,
        password
    };
}