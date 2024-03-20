import RegisterPage from '../page_objects/register.page.js'
import testData from './utils/registerData.json' assert {type: "json"};

describe('User registration', () => {
    beforeEach(async function() {
        await RegisterPage.open()
    })

    it('password validation', async () => {
        for (const data of testData) {
            await RegisterPage.register(data.first_name, data.last_name, data.email, data.phone, data.password, data.confirm_password)
            await browser.pause(3000)

            const erorMessage = await RegisterPage.getErrorMessage() 
            await expect(erorMessage).toEqual(data.error_msg)
        }
    });
});