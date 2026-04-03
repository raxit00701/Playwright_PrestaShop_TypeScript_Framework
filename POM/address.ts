import { Page } from '@playwright/test';

export class AddressPage {

    constructor(private page: Page) {}

    // Locators (optional but clean)
    aliasInput = () => this.page.getByRole('textbox', { name: 'Alias' });
    companyInput = () => this.page.getByRole('textbox', { name: 'Company' });
    addressInput = () => this.page.getByRole('textbox', { name: 'Address' }).first();
    address2Input = () => this.page.getByRole('textbox', { name: 'Address Complement' });
    cityInput = () => this.page.getByRole('textbox', { name: 'City' });
    stateDropdown = () => this.page.getByRole('combobox', { name: 'State' });
    zipInput = () => this.page.getByRole('textbox', { name: 'Zip/Postal Code' });
    countryDropdown = () => this.page.getByRole('combobox', { name: 'Country' });
    phoneInput = () => this.page.getByRole('textbox', { name: 'Phone' });
    continueBtn = () => this.page.getByRole('button', { name: 'Continue' });

    // Action method (Factory-style reusable)
    async fillAddressForm(data: {
        alias: string;
        company: string;
        address: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
    }) {

        await this.aliasInput().fill(data.alias);
        await this.companyInput().fill(data.company);
        await this.addressInput().fill(data.address);
        await this.address2Input().fill(data.address2);
        await this.cityInput().fill(data.city);

        const state = this.stateDropdown();
        await state.click();
        await state.press('ArrowDown'); // realistic
        await state.selectOption({ label: data.state });

        await this.zipInput().fill(data.zip);
        await this.countryDropdown().selectOption({ label: data.country });
        await this.phoneInput().fill(data.phone);

        await this.continueBtn().click();
    }
}