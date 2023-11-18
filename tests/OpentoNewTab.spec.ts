//@ts-check
import{test,expect} from "@playwright/test"

test('Open a new tab', async({page}) => {
await page.goto('https://demoqa.com/browser-windows');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const page1 = await page1Promise;
  console.log(await page1.url()); 
});