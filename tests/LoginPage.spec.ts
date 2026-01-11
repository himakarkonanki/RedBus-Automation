import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage/LoginPage';

test('Login Page', async ({ page }) => {
  await page.goto("https://www.redbus.in/",{
  timeout: 90000,
  waitUntil: "domcontentloaded"})

  const loginPage= new LoginPage(page)
  
 

  await test.step("Clicking on Account and Verify Login Popover is displayed", async ()=>{
      await loginPage.clickOnAccountButton()
      await expect(loginPage.loginPageLocators.LOGIN_POPOVER_TEXT).toHaveText("Log in to manage your bookings")
      await loginPage.clickOnLoginButton()
  })

  await test.step("Sign in with Google", async ()=>{
      // toHaveText -> will have Strict checking
      await expect(loginPage.loginPageLocators.LOGIN_POPUP).toHaveText("What's your mobile number?")
      await loginPage.clickOnSignInWithGoogle("testautomation0609@gmail.com","Aeiouvowels@6")
      await loginPage.clickOnFrom("Electronic city")
      await loginPage.page.pause()
  })



});


