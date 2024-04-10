
const outputValue = document.getElementById('output');
const btn = document.getElementById('button');

let yours = document.getElementById('your')
yours.style.visibility = 'hidden'


// -------------

function generatePassword(length) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()-_=+';
    const numbers = '0123456789';

    let allChars = lowercaseChars + uppercaseChars + symbols + numbers;

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

// Example usage:
// Length decided by the user


btn.addEventListener('click', function () {
    const rangeInput = document.getElementById('rangeInput').value;

    const passwordLength = rangeInput;
    const newPassword = generatePassword(passwordLength);
    outputValue.innerHTML = newPassword
    if (!newPassword) {
        yours.style.visibility = 'hidden'
    }
    else {

        yours.style.visibility = 'visible'
    }
});


