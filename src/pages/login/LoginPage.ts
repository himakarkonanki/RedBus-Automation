import { expect, Page, test } from "@playwright/test"
import { LoginPageLocators } from "./LoginPageLocators"

export class LoginPage {

    readonly page: Page
    readonly loginPageLocators: LoginPageLocators

    constructor(page: Page) {
        this.page = page
        this.loginPageLocators = new LoginPageLocators(page)
    }

    async clickOnAccountButton() {
        await this.loginPageLocators.ACCOUNT_BUTTON.click()
    }

    async clickOnLoginButton() {
        await this.loginPageLocators.LOGIN_BUTTON.click()
    }

    async clickOnSignInWithGoogle(email: string, password: string) {
        const page1Promise = this.page.waitForEvent('popup');
        await this.loginPageLocators.SIGN_IN_WITH_GOOGLE.click()
        const page1 = await page1Promise;
        await page1.getByRole('textbox', { name: 'Email or phone' }).click();
        await page1.getByRole('textbox', { name: 'Email or phone' }).fill(email);
        await page1.getByRole('button', { name: 'Next' }).click();
        await page1.getByRole('textbox', { name: 'Enter your password' }).fill(password);
        await page1.getByRole('button', { name: 'Next' }).click();
        await this.page.getByLabel('Close').click();
    }

    




}