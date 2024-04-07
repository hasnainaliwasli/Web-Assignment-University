let plusBtn = document.getElementById('plusBox');
let minusBtn = document.getElementById('minusBox');
let counter = document.getElementById('counter');
let counterNum = 0

plusBtn.addEventListener('click', function () {
    counterNum += 1;
    counter.innerHTML = counterNum;
})
minusBtn.addEventListener('click', function () {
    if (counterNum > 0) {
        counterNum -= 1;
        counter.innerHTML = counterNum;
    }
})