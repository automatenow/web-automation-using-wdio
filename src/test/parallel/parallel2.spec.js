describe('Making assertions', () => {

    beforeEach(async function() {
        await browser.url('https://www.lambdatest.com/selenium-playground/');
    })

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
