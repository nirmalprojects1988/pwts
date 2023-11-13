//@ts-check
// @ts-ignore
import{test,expect} from "@playwright/test"
import {faker} from "@faker-js/faker"
import { deprecate } from "util";

test.skip('Get by role practice', async({page}) => {

   await page.goto('https://ecommerce-playground.lambdatest.io/')

   await page.getByRole('button',{name:'Shop by Category'}).click()
   await page.getByRole('heading', { name: 'Top categories close' }).getByLabel('close').click()
   await page.getByRole('button',{name:' My account'}).nth(1)
   .hover({force:true})
   await page.getByRole('link',{name:'Login'}).click()
   await page.getByRole('link',{name:'Continue'}).click()
   await page.close()
    
});
test('Get by place holder practice',async ({page}) => {
   await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
  
   const firstName: string=faker.name.firstName()
   const lastname:string=faker.name.lastName()
   const email:string=faker.internet.email()
   const phoneNumber:string=faker.phone.number()

   await page.getByPlaceholder('First Name').fill(firstName)
   await page.getByPlaceholder('Last Name').fill(lastname)
   await page.getByPlaceholder('E-Mail').fill(email)
   await page.getByPlaceholder('Telephone').fill(phoneNumber)
   await page.getByText('Yes').click()
   await page.pause()
   
});