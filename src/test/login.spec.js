import LoginPage from '../page_objects/login.page.js'

describe('Test login', () => {
    beforeEach(async function () {
        await LoginPage.open()
    })

    it('logs in using valid credentials', async () => {
        await LoginPage.login("happy-tester@test.com", "password")
        await browser.pause(3000)
    })
})