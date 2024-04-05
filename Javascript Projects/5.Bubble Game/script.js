let restartBtn = document.getElementById('restart')


// Bubble Making Function
function makeBubble() {
    let bubble = ''
    for (i = 1; i < 127; i++) {
        let bubbleNum1 = Math.floor(Math.random() * 10)
        bubble += `<div class="bubble">${bubbleNum1}</div>`
    }

    return document.getElementById("bubbleBar").innerHTML = bubble;
}

// Timer Function 

let time = 60;
function timer() {
    let timeInertval = setInterval(function () {
        if (time > 0) {
            time--;
            document.getElementById("time").innerHTML = time
        }
        else {
            clearInterval(timeInertval)
            document.getElementById('bubbleBar').innerHTML = "<span style='margin-top:15%' ><h1 style='color:red;font-weight:700'>Game Over!</h1></span>  "



        }
    }, 1000)
}


// Hit Number function
let hit;
function hitFunc() {
    hit = Math.floor(Math.random() * 10)
    document.getElementById('hit').innerHTML = hit;
}


// Score Increase function
let score = 0;
function scoreFun() {
    document.getElementById('score').innerHTML = score
    score += 10;

}


// Event Listner

document.getElementById('bubbleBar').addEventListener('click', function (e) {
    let clickedValue = Number(e.target.innerText);
    if (clickedValue === hit) {
        scoreFun();
        hitFunc()
        makeBubble()
    }
    else {
        hitFunc()
    }
})


// Restart Game
restartBtn.onclick = function () {
    location.reload();
}



makeBubble()
timer();
hitFunc();
scoreFun()
