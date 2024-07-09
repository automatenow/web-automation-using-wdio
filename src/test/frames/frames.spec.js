describe('Working with frames', () => {

    // it('should find the text "Middle" in the bottom middle frame', async () => {
    //     await browser.url('https://www.lambdatest.com/selenium-playground/nested-frames/');
        
    //     // Switch to the bottom frame
    //     const bottomFrame = await browser.$('frame[name="frame-bottom"]');
    //     await browser.switchToFrame(bottomFrame);

    //     // Switch to the middle frame within the bottom frame
    //     const middleFrame = await browser.$('frame[name="frame-middle"]');
    //     await browser.switchToFrame(middleFrame);

    //     // Find the text "Middle" in the bottom middle frame
    //     let text = await browser.$('body').getText();
    //     expect(text).toBe('Middle');

    //     // Switch to default frame
    //     await browser.switchToFrame(null)

    //     // Switch to top frame
    //     const topFrame = await browser.$('frame[name="frame-top"]');
    //     await browser.switchToFrame(topFrame);

    //     // Find the text "Top" in the top frame
    //     text = await browser.$('body').getText();
    //     expect(text).toBe('Top');
    // });

    it('should assert the page title within each iframe', async () => {
        await browser.url('https://practice-automation.com/iframes/');

        // Switch to the top iframe
        const iframe = await $('#iframe-1');
        await browser.switchToFrame(iframe);

        // Click 'Get Started'
        const getStarted = await $('a[href="/docs/intro"]')
        getStarted.click();

        // Verify the page title
        const pageTitle = await browser.$('h1').getText();
        expect(pageTitle).toBe('Installation');
    });
});