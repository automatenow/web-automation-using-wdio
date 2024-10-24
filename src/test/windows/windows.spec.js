describe('Window Popup Modal Demo Test', () => {
    it('clicks verifies "like us on Facebook" buttton functionality', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

        // Find the 'Like us On Facebook' button and click it
        const facebookButton = await $('a[title="Follow @Lambdatesting on Facebook"]');
        await facebookButton.click();

        // Get the current window handle (main window)
        const mainWindowHandle = await browser.getWindowHandle();

        // Wait for the new window to open and get all window handles
        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length > 1,
            {
                timeout: 5000,
                timeoutMsg: 'Expected a new window to open after 5 seconds'
            }
        );

        // Get all the window handles
        const allWindowHandles = await browser.getWindowHandles();

        // Switch to the newly opened window (should be the second handle)
        const newWindowHandle = allWindowHandles.find(handle => handle !== mainWindowHandle);
        await browser.switchToWindow(newWindowHandle);

        // Wait for the Facebook page to load and verify "See more on Facebook" is present
        const seeMoreText = await $('//span[text()="See more on Facebook"]');
        await seeMoreText.waitForDisplayed({ timeout: 5000 });

        // Assert that the "See more on Facebook" text is displayed
        expect(await seeMoreText.isDisplayed()).toBe(true);
        await browser.pause(2000); // Pause to see the new window

        // Close the new window and switch back to the main window
        await browser.closeWindow();
        await browser.pause(2000); // Pause to see the closing of the new window
        await browser.switchToWindow(mainWindowHandle);
    });
});
