//@ts-check
import{test,expect} from "@playwright/test"
import path from "path";

test.describe('upload file examples',()=>{

    test('Upload a file ', async({page}) => {
        const filepath='tests/testdata/test-failed-1.png'
       // const filepath='/Users/nirmal/Desktop/pwts/tests/testdata/test-failed-1.png'
        await page.goto('https://the-internet.herokuapp.com/upload');
        page.on('filechooser',async(filechooser)=>{
            await filechooser.setFiles([filepath])
        })
        await page.locator('#file-upload').click();
       await page.locator('#file-upload').setInputFiles(filepath)
       await page.getByRole('button', { name: 'Upload' }).click();
    });
})