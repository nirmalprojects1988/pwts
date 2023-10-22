//@ts-check
import { expect,test } from "@playwright/test";

test.describe('selenium demo alert examples',()=>{

    test('Java Script Alert Box example', async({page}) => {
       await page.goto('http://demo.seleniumeasy.com/javascript-alert-box-demo.html')
       await page.getByRole('button',{name:'Click me!'}).nth(0).click()
       page.on('dialog', async (dialog) => {
        const alertmsg=dialog.message();
        console.log(alertmsg)
        expect(dialog.message()).toEqual('I am an alert box!')
        await dialog.accept()

       })
       await page.close()


    });
    
})