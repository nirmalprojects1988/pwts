//@ts-check
import { expect,test } from "@playwright/test";

test.describe('internet herokuapp js prompt',()=>{

    test.skip('click on the js prompt and enter data', async({page}) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
        await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
        expect(page.getByText('You entered: null')).toHaveText('You entered: null')
        await page.close()
    });
   
})