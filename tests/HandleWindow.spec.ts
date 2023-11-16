//@ts-check
import{test,expect} from "@playwright/test"

test('Handle window in new fashion', async({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
    const popupPromise = page.waitForEvent('popup')
    await page.getByText('Follow On Twitter').click();
    const popup = await popupPromise;
// Wait for the popup to load.
    await popup.waitForLoadState();
    console.log(await popup.title());
    
});