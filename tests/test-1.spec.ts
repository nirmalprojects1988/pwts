import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/frame');
  
  await page.frameLocator('iframe[name="firstFr"]').getByPlaceholder('Enter name').fill('nirmal');
});