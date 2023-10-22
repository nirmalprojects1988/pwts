// @ts-check
import{test,expect} from "@playwright/test"

test.describe("lamda test demo website examples",()=>{

    test('Mouse hover on my acount',async({page})=>{
        await page.goto('https://ecommerce-playground.lambdatest.io/')
        await page.getByText('My account').nth(1).hover({force:true})
        await page.getByText('Login').click()
      await expect(page).toHaveTitle('Account Login')
        await page.close()
        
    })
})