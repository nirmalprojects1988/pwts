//@ts-check
import{test,expect} from "@playwright/test"

test.describe('internet herokuapp checkbox example',()=>{
    test('click on checkbox example',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/checkboxes')
         await page.locator('//input[1]').check()
        await expect(page.locator('//input[1]').isChecked).toBeTruthy()
        await page.close()
    })
    test('click on the checkbox to uncheck',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/checkboxes')
        await page.locator('//input[2]').uncheck()
        await expect(page.locator('//input[2]')).not.toBeChecked()
        await page.close()
    })
})