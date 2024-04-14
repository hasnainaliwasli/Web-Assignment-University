let inputValue = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let AllTyped = '';

// Convert NodeList to array using Array.from
Array.from(buttons).forEach(button => {
    button.addEventListener('click', function (e) {

        if (button.value === "=") {
            let final = eval(inputValue.value);
            inputValue.value = final;
            AllTyped = '';
        } else if (button.value !== 'C' && button.value !== '=') {
            AllTyped += button.value;
            inputValue.value = AllTyped;
        }
        else {
            inputValue.value = '';
        }
    })
});
