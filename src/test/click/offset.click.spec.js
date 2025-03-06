describe('Element click operations', () => {

    it('clicks an element by a given offset', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo');

        const slider = await $('input[value="5"]');

        await slider.click();
        await browser.pause(3000);
        await slider.click({x: 100});
        await browser.pause(3000);
        await slider.click({x: -100});
        await browser.pause(3000);

        const size = await slider.getSize();
        // console.log("######## Width : " + size.width);  // Prints the width of the slider
        // console.log("######## Height : " + size.height); // Prints the height of the slider

        // Click near the right edge (25% from center)
        const rightOffset = Math.floor(size.width * 0.25);
        await slider.click({x: rightOffset});
        await browser.pause(3000);

        // Click near the left edge (25% from center)
        const leftOffset = -Math.floor(size.width * 0.25);  
        await slider.click({x: leftOffset});
        await browser.pause(3000);
    });
});
