// Write HTML and JavaScript code that can create a countdown timer starting from 10 and decrementing by 1 every second.


let outputBox = document.getElementById('box')

    let time = 10;
    setInterval(function () {
        time--
        outputBox.innerHTML = time
    }, 1000)
