// @ts-check
import { test, expect, chromium } from '@playwright/test';
import { describe } from 'node:test';

describe('Open browser example',()=>{
    test('open page',async () => {
        const browser=await chromium.launch({
            
        })
        const context=await browser.newContext()
        const page=await context.newPage();
        await page.goto('https://www.google.com/')
        await expect(page).toHaveTitle('Google')
        
        await page.close()
        await context.close();
        await browser.close();
     });
})