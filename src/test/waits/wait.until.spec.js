describe('Introduction to wdio basic features', () => {
    it('uses the waitUntil command', async () => {
        browser.url('https://ecommerce-playground.lambdatest.io/')
        browser.maximizeWindow()

        await $('//span[normalize-space()="Mega Menu"]').moveTo()
        await $('a[title="Printer"]').click()

        const title = await $('h1')
        await title.waitUntil(async function() {
            return await this.getText() === 'Printers'
        })

        async function numberOfResultsToBe(count){
            const elementCount = $$('.product-thumb').length
            return await elementCount === count 
        }

        const checkbox = await $('(//label[normalize-space()="Pre-Order"])[2]')
        await checkbox.click()
        await browser.waitUntil(async function() {
            return await numberOfResultsToBe(2)
        },
        {
            timeout: 3000,
            timeoutMsg: 'did not find corrent # of results',
            interval: 1000
        })
        browser.pause(3000)
    })
})