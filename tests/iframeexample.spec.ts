//@ts-check
import{test,expect} from "@playwright/test"

test('Enter value inside inframe', async({page}) => {
   await page.goto('https://letcode.in/frame')
        const frame=page.frameLocator('iframe[name="firstFr"]')
    //frame.getByPlaceholder('Enter name').fill('nirmal')
    frame.getByPlaceholder('Enter name').pressSequentially('nirmal')
   await expect(frame.getByPlaceholder('Enter name')).toHaveValue('nirmal') 
});