//@ts-check
import{test,expect} from "@playwright/test"

test.describe('Lamda test open a new window example',()=>{
    test('open new window', async({context}) => {
        const page=await context.newPage()
        page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
        const [newwindow]= await Promise.all([
            page.waitForEvent('popup',{ timeout: 5000 }).catch(error => null),
         page.getByText('Follow On Twitter').click()
        ]);
        if(newwindow!==null){
        console.log(newwindow.url())
        }
        else{
            console.log('There is error')
        }
    });
    
})