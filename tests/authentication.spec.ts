//@ts-check
import{test,expect} from "@playwright/test"
test.describe('internet herokuapp javascript authentication',()=>{

    test('Enter username and password', async({page}) => {
        const username = 'admin';
        const password = 'admin';
        const urlWithAuth = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
        await page.goto(urlWithAuth)
        await expect(page.getByRole('heading', { name: 'Basic Auth' })).toContainText('Basic Auth')
        await expect(page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible();
        await page.close()
    });
    
})