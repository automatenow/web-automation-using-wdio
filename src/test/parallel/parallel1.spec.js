describe('Making assertions', () => {

    beforeEach(async function() {
        await browser.url('https://www.lambdatest.com/selenium-playground/');
    })

    it('checks page URL', async () => {
        await expect(browser).toHaveUrl('https://www.lambdatest.com/selenium-playground/');

        // Or
        await expect(browser).toHaveUrl(expect.stringContaining('lambdatest'));
    });

    it('checks page title', async () => {
        await expect(browser).toHaveTitle(expect.stringContaining('Selenium'));
    });

    it('checks that "Book a Demo" button is clickable', async () => {
        const button = await $('button=Book a Demo');
        await expect(button).toBeClickable();
    });

    it('checks the h1 heading', async () => {
        const heading = await $('h1=Selenium Playground');
        await expect(heading).toBeDisplayed();
    });

    it('checks that an input element is enabled', async () => {
        const simpleFormLink = await $('a=Simple Form Demo');
        await simpleFormLink.click();

        const input = await $('#user-message');
        await expect(input).toBeEnabled();
    });
});
