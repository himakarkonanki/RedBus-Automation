import { FrameLocator, Locator, Page } from "@playwright/test"

export class LoginPageLocators{

    readonly page:Page
    readonly ACCOUNT_BUTTON:Locator
    readonly LOGIN_POPOVER_TEXT:Locator
    readonly LOGIN_BUTTON:Locator
    readonly LOGIN_POPUP:Locator
    readonly SIGN_IN_WITH_GOOGLE:Locator
    readonly EMAIL_INPUT:Locator
   

    constructor(page:Page){
        this.page=page
        this.ACCOUNT_BUTTON=page.locator(".navOption___85b680").getByText("Account")
        this.LOGIN_POPOVER_TEXT=page.locator(".container___7afe97 .header___7a5730")
        this.LOGIN_BUTTON=page.getByRole('button').getByText('Log in')
        this.LOGIN_POPUP=page.locator('.bottomSheetbody___5bc99f h4')
        this.SIGN_IN_WITH_GOOGLE=page.locator("#googleCustomBtn")
        this.EMAIL_INPUT=page.locator('#identifierId')
       
        
        
    }

}