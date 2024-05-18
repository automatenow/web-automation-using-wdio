describe('Introduction to wdio basic features', () => {
    it('searches for a product', async () => {
        browser.url('https://ecommerce-playground.lambdatest.io/')
        // await $('input[name="search"]').setValue("iphone")
        // await $('button[type="submit"]').click()
        // await browser.pause(3000)

        // Element hover
        await $('//span[normalize-space()="Mega Menu"]').moveTo()
        await $('a[title="Headphones"]').click()
        browser.pause(3000)
    })
})