//@ts-check
import{test,expect} from "@playwright/test"

test.describe('internet herokuapp context menu',()=>{
    test('Right click example',async({page})=>{
            await page.goto('https://the-internet.herokuapp.com/context_menu')
            await page.locator('[id="hot-spot"]').click({
                button: 'right'})
                page.on('dialog', async (dialog) => {
                    console.log(dialog.message())
                    expect(dialog.type() === 'beforeunload');
                    await dialog.dismiss();
                  });
                  await page.close({ runBeforeUnload: true });
    })

})