describe('JavaScript alerts demo', () => {
    it('clicks an alert and verifies the Cancel button functionality', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

        // Find the second 'Click me' button using appropriate selector and click it
        const secondClickMeButton = await $('(//button[text()="Click Me"])[2]');
        await secondClickMeButton.click();
        await browser.pause(3000);

        // Click the alert's 'Cancel' button and wait
        await browser.dismissAlert();
        await browser.pause(3000);

        // Verify the text "You pressed Cancel!" appears on the page
        const resultText = await $('#confirm-demo').getText();
        expect(resultText).toBe('You pressed Cancel!');
    });
});
