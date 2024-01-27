import LoginPage from '../page_objects/login.page.js'

describe('Test login', () => {
    it('logs in using valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login("happy-tester@test.com", "password")
        await browser.pause(3000)
    })
})