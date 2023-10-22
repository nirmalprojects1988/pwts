//@ts-check
import {expect,test } from "@playwright/test";

test.describe('internet herokuapp drop down example',()=>{

    test('select value from drop down',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/dropdown')
        await page.locator('[id="dropdown"]').selectOption('2')
        const text=page.getByText('Option 2')
        await expect(text).toHaveText('Option 2')
        await page.close()
    })
})