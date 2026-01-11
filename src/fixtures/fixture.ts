import { test as base, expect } from "@playwright/test"
import { LoginPage } from "../pages/login/LoginPage"
import { BookingPage } from "../pages/booking/BookingPage"

type MyFixtures = {
    login: LoginPage
    bookingPage: BookingPage
}

export const test = base.extend<MyFixtures>({
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page)

        await loginPage.page.goto("https://www.redbus.in/", {
            timeout: 90000,
            waitUntil: "domcontentloaded"
        })

        await test.step("Clicking on Account and Verify Login Popover is displayed", async () => {
            await loginPage.clickOnAccountButton()
            await expect(loginPage.loginPageLocators.LOGIN_POPOVER_TEXT).toHaveText("Log in to manage your bookings")
            await loginPage.clickOnLoginButton()
        })

        await test.step("Sign in with Google", async () => {
            // toHaveText -> will have Strict checking
            await expect(loginPage.loginPageLocators.LOGIN_POPUP).toHaveText("What's your mobile number?")
            await loginPage.clickOnSignInWithGoogle("testautomation0609@gmail.com", "Aeiouvowels@6")
            await loginPage.page.pause()
        })
        await use(loginPage)
    },
    bookingPage: async ({ page }, use) => {
        const booking = new BookingPage(page)
        await use(booking)
    }


})