//@ts-check
import{test,expect} from "@playwright/test"

test('Enter value inside inframe', async({page}) => {
   await page.goto('https://letcode.in/frame')
   const frame=await page.frameLocator('iframe[name="firstFr"]')
    //frame.getByPlaceholder('Enter name').fill('nirmal')
   await frame.getByPlaceholder('Enter name').pressSequentially('nirmal')
   await expect(frame.getByPlaceholder('Enter name')).toHaveValue('nirmal') 

});

test('work with nested frame', async({page}) => {
   await page.goto('https://letcode.in/frame')
   const frame=await page.frame({url:'https://letcode.in/innerFrame'})
   frame?.getByPlaceholder('Enter email').fill('nirmal@gmail.com')
});
test('interact with frame by frame method', async({page}) => {
   await page.goto('https://letcode.in/frame')
   const frame=await page.frame('firstFr')
   frame?.getByPlaceholder('Enter name').pressSequentially('nirmal')
});
test('get count of all frames', async({page}) => {
  await page.goto('https://letcode.in/frame')
  const frames=await page.frame('firstFr')
 console.log(`Total child frame count ${frames?.childFrames()?.length ??'Frame not found'}`);

  
//   const frame = await page.frame({ name: 'firstFr' });

//   if (frame) {
//     const childFrames = await frame.childFrames();
//     console.log(`Total child frame count ${childFrames.length}`);
//   } else {
//     console.log('Frame with name "firstFr" not found');
//   }
 
});
