//@ts-check
import{test,expect} from "@playwright/test"
import { log } from "console";

test('Select and print values from bootstrap dropdown', async({page}) => {
    await page.goto('http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
    await page.getByText('Tutorials').click({force:true})
 const tutorialsvalues=await page.locator('//ul[@class="dropdown-menu"]//li').allInnerTexts()
 for(let value of tutorialsvalues)
 if(value!=''){
  console.log(value);
 }

});

test.skip('click a value inside boothstrap dropdown', async({page}) => {
    await page.goto('http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
    await page.getByText('Tutorials').click({force:true})
    await page.getByText('JavaScript').click({force:true})
   const currenturl= await page.url()
    expect(currenturl).toBe('https://learn-automation.com/')
    
});