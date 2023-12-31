//@ts-check
import{test,expect} from "@playwright/test"

test.skip('Handel input field', async({page}) => {
   
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    const firstname=await page.$('id=input-firstname')
    test.slow()
    firstname?.fill('nirmal')
});
test.skip('Handel input field without option chaining and $',async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    await page.getByPlaceholder('First Name').fill('nirmal')
})
test.skip('get attribute value',async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    const attributevalue=await page.getByPlaceholder('First Name').getAttribute('placeholder')
    console.log(attributevalue);
    

})
test('handel checkbox by get label', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    test.slow()
    await page.getByText('Yes').click()
});
