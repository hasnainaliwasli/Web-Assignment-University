let clock = document.getElementById('clk')

setInterval(function () {
let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)