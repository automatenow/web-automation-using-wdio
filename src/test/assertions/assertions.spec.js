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

    it('checks that a check box is disabled', async () => {
        const checkboxDemoLink = await $('a=Checkbox Demo');
        await checkboxDemoLink.click();

        const optionThree = (await $('label=Option 3')).previousElement('input');
        await expect(optionThree).toBeDisabled();
    });

    it('checks that an input element has a given value', async () => {
        const simpleFormLink = await $('a=Simple Form Demo');
        await simpleFormLink.click();

        const input = await $('#user-message');
        await input.setValue('I love testing!');
        await browser.pause(2000);
        await expect(input).toHaveValue('I love testing!');
    });

    it('checks that an input element has a given text', async () => {
        const heading = await $('h1');
        await expect(heading).toHaveText('Selenium Playground');
    });

    it('checks that an input element has a given attribute', async () => {
        const link = await $('a=Checkbox Demo');
        await expect(link).toHaveAttribute('href');

        // Or
        await expect(link).toHaveAttribute('href', 'https://www.lambdatest.com/selenium-playground/checkbox-demo');
    });

    it('checks that an element has a given class', async () => {
        const heading = await $('h1');
        await expect(heading).toHaveElementClass('font-bold');
    });

    it('checks that a list has line items', async () => {
        const list = await $('.list-disc');
        await expect(list).toHaveChildren();
    });

    it('checks that a check box is checked', async () => {
        const checkboxDemoLink = await $('a=Checkbox Demo');
        await checkboxDemoLink.click();

        const firstCheckbox = await $('#isAgeSelected');
        await firstCheckbox.click();
        await browser.pause(2000);
        await expect(firstCheckbox).toBeChecked();
    });
});
