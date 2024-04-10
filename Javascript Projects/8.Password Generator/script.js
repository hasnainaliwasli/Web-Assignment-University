
const outputValue = document.getElementById('output');
const btn = document.getElementById('button');
const copyButton = document.getElementById('copyButton');


let yours = document.getElementById('your')
yours.style.visibility = 'hidden'
copyButton.style.visibility = 'hidden'


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
        copyButton.style.visibility = 'hidden'
    }
    else {

        yours.style.visibility = 'visible'
        copyButton.style.visibility = 'visible'
    }
});



// Get the button and output elements
const output = document.getElementById('output');

// Add click event listener to the button
copyButton.addEventListener('click', function () {
    // Select the text inside the output div
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(output);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the selected text to clipboard
    document.execCommand('copy');

    // Deselect the text
    selection.removeAllRanges();

    // Provide visual feedback
    copyButton.innerText = 'Copied!';
    copyButton.style.backgroundColor = "green"
    setTimeout(() => {
        copyButton.innerText = 'Copy';
        copyButton.style.backgroundColor = "#007bff"
    }, 1000);


});



