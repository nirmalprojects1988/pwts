import { expect,test } from "@playwright/test";

test('test', async ({ page }) => {
   await page.goto('https://demo.automationtesting.in/Register.html');
   await page.getByPlaceholder('First Name').click();
   await page.getByPlaceholder('First Name').fill('Nirmal');
   await page.locator('textarea').click();
   await page.locator('textarea').fill('Bangalore');
   await page.locator('input[type="email"]').click();
   await page.locator('input[type="email"]').fill('nirmal.chakraborty@gmail.com');
   await page.getByText('Male FeMale').click();
   await page.getByLabel('Male', { exact: true }).check();
   await page.locator('#checkbox1').check();
   await page.locator('#Skills').selectOption('Analytics');
   await page.getByLabel('', { exact: true }).click();
   await page.getByRole('treeitem', { name: 'Australia' }).click();
   await page.getByTitle('Australia').click();
   await page.locator('input[type="search"]').fill('india');
   await page.getByRole('treeitem', { name: 'India' }).click();
   await page.getByRole('button', { name: 'Submit' }).click();
 });