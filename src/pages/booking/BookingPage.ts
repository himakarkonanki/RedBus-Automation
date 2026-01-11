import{Page, test} from "@playwright/test"
import { BookingPageLocators } from "./BookingPageLocators"

export class BookingPage{

    readonly page:Page
    readonly bookingPageLocators:BookingPageLocators

    constructor(page:Page){
        this.page=page
        this.bookingPageLocators= new BookingPageLocators(page)
    }

    async clickOnFrom(from:string) {
        await this.bookingPageLocators.FROM_LOCATION.click()
        await this.bookingPageLocators.ENTER_SOURCE.fill(from)
    }
}