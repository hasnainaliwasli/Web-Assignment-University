

// Write HTML and JavaScript code that can change the background color of a webpage when a button is clicked.


let btn = document.getElementById('btn')
let body = document.querySelector('body')

function chngBg() {
    if (body.style.backgroundColor == 'white') {
        body.style.backgroundColor = 'red'
    }
    else if (body.style.backgroundColor == 'red') {
        body.style.backgroundColor = 'blue'
    }
    else if (body.style.backgroundColor == 'blue') {
        body.style.backgroundColor = 'yellow'
    }
    else if (body.style.backgroundColor == 'yellow') {
        body.style.backgroundColor = 'purple'
    }
    else if (body.style.backgroundColor == 'purple') {
        body.style.backgroundColor = 'green'
    }
    else {
        body.style.backgroundColor = 'white'
    }

}