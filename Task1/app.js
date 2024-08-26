const input = document.getElementById('input'),
    clear = document.getElementById('clear'),
    equal = document.getElementById('equal'),
    allButton = document.querySelectorAll('button');

for (let button of allButton) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText == 'X') buttonText = '*';
        if (buttonText == '=') return; // Skip adding '=' to the input
        input.value += buttonText;
    });
}

equal.addEventListener('click', () => {
    try {
        input.value = eval(input.value.replace(/[^-()\d/*+.]/g, ''));
    } catch {
        input.value = "Error";
    }
});

clear.addEventListener('click', () => input.value = '');
