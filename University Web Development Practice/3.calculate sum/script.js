// Write HTML and JavaScript code that can create a simple calculator to add two numbers.

let input2 = document.getElementById('num2')
let input1 = document.getElementById('num1')
let btn = document.getElementById('btn')
let sumDiv = document.getElementById('sum')


btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
        input1.value == '' ||
        input2.value == '') {
        alert('Please Insert Numbers')
    }
    else {
        let sum = Number(input1.value) + Number(input2.value)
        sumDiv.innerHTML = `${input1.value} + ${input2.value} = ${sum}`;
       
    input1.value = '';
    input2.value = '';
    }

})