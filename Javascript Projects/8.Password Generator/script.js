
const rangeInput = document.getElementById('rangeInput');
const outputValue = document.getElementById('output');
const btn = document.getElementById('button');




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

    const passwordLength = 12;
    const newPassword = generatePassword(passwordLength);

    outputValue.innerHTML = newPassword
});


