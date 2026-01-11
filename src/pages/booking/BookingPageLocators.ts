import { Locator, Page, test } from "@playwright/test"

export class BookingPageLocators {

    readonly page: Page
    readonly FROM_LOCATION: Locator
    readonly ENTER_SOURCE: Locator
    constructor(page: Page) {
        this.page = page
        this.FROM_LOCATION = page.locator(".inputAndSwapWrapper___ed8f88").filter({ hasText: 'From' })
        this.ENTER_SOURCE = page.locator("#srcinput")
    }
}