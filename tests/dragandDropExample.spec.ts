//@ts-check
import{test,expect} from "@playwright/test"


test.describe('internet herokuapp drag and drop example',()=>{
test('drag and drop operation', async({context}) => {
    const page=await context.newPage();
   await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    await page.locator('[id="column-a"]').dragTo(page.locator('[id="column-a"]'))
    await page.close()
});

})