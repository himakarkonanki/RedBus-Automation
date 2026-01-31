import { expect } from "@playwright/test";
import {test} from "../src/fixtures/fixture"

test('Booking Page', async ({ page, bookingPage, login}) => {

    await test.step("Click on From", async()=>{
        await bookingPage.clickOnFrom("Electronic city")
    })




})


