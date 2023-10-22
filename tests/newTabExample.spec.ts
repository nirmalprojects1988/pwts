//@ts-check
import{expect,test} from "@playwright/test"

test.describe('internet herokuapp open window',()=>{
 test('click on the link and verify it opens in new tab', async({context}) => {
        const page=await context.newPage() 
       await page.goto('https://the-internet.herokuapp.com/windows')
       const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText('Click Here').click()
       
      ])
      await newPage.waitForLoadState();
      console.log(await newPage.title());
       
    });
})