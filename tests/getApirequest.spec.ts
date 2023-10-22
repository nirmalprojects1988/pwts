//@ts-check
import{test,expect} from "@playwright/test"

test('get users', async({request}) => {
    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)

});