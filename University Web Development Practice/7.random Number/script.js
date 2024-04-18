// Write HTML and JavaScript code that can generate a random number between 1 and 100 when a button is clicked.

let btn = document.getElementById('btn')
let output = document.getElementById('input')

function genNum() {

    let num = Math.floor(Math.random() * 100 + 1)
    output.innerHTML = num
}