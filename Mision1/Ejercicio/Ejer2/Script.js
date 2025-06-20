    let count = 0;
        const button = document.getElementById('clickButton');
        const display = document.getElementById('clickCount');
        const resetButton = document.getElementById('resetButton');
        const clickCount = document.getElementById('clickCount');

        resetButton.addEventListener('click', function() {
        count = 0;
        clickCount.textContent = 'Clicks: ' + count;
});

        button.addEventListener('click', () => {
            count++;
            display.textContent = `Clicks: ${count}`;
        });