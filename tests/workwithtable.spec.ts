//@ts-check
import{test,expect} from "@playwright/test"


test('Get each cell data', async({page}) => {
   await page.goto('https://the-internet.herokuapp.com/tables')
   let rowcount= await page.locator('//table[@id="table1"]//tbody//tr').count()
   console.log(`total row count ${rowcount}`);// total row count
   for(let i=1;i<=rowcount;i++){
        console.log("Last Name:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[1]').innerText());
        console.log("First Name:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[2]').innerText());
        console.log("Email:"+ await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[3]').innerText());
        console.log("Due:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[4]').innerText());
        console.log("Web Site:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[5]').innerText());
        console.log("=========")
   }
   
});

test('Get data by condition', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/tables')
   let rowcount= await page.locator('//table[@id="table1"]//tbody//tr').count()
   for(let i=1;i<=rowcount;i++){
    let due = await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[4]').innerText();
    if(due==='$50.00'){
        console.log("Last Name:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[1]').innerText());
        console.log("First Name:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[2]').innerText());
        console.log("Email:"+ await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[3]').innerText());
        console.log("Due:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[4]').innerText());
        console.log("Web Site:" + await page.locator('//table[@id="table1"]//tbody//tr['+i+']//td[5]').innerText());
        console.log("=========")
    }
}

});