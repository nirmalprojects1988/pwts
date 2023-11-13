//@ts-check
import {test,expect} from "@playwright/test"

let page;

test.beforeEach(async ({ context }) => {
    // Create the page at the beginning of each test case
    page = await context.newPage();
   
});
async function login(page, email, password) {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('button', { name: ' My account' }).click({ force: true });
    
    await page.waitForURL('**/index.php?route=account/login')
    await page.getByPlaceholder('E-Mail Address').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
   
    await Promise.all([
        page.waitForSelector('img[alt="Poco Electro"]')
    ])
    await page.getByAltText('Poco Electro').click();
    await page.waitForURL('**/index.php?route=common/home')
    await page.close()
}

test('Login to lamda test', async({context}) => {
   await login(page,'webtestingu@gmail.com','lamdatest')
    
});

test.afterEach( async ()=>{
    if (page) {
        await page.close();
    }

})
