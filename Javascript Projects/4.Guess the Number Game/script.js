// let inputValue = document.getElementById("input");
let button = document.getElementById("btn");
let randomNum = ramNum()
function ramNum() {
    return parseInt((Math.random() * 100 + 1));
}


let guesRemain = document.getElementById("guessRemaining");
document.querySelector("body").style.backgroundColor = 'black'


// Input Value Get
function inputValue() {
    let input = document.getElementById("input").value;
    return input;
}


let prevGuess = [];
let remainGuess = 10
guesRemain.innerHTML = remainGuess;

noDisplay()

document.getElementById("startBtn").onclick = function () {
    ramNum()
    document.getElementById("startBtn").style.display = "none"

    show()
    document.querySelector(".containerMain").style.backgroundColor = "whitesmoke";



    button.onclick = function () {

        prevGuess.push(inputValue())

        validate();
        document.getElementById("input").value = ''
        document.getElementById("prevGuess").innerHTML = prevGuess;

        document.getElementById("guessRemaining").innerHTML = remainGuess;
        remainGuess = remainGuess - 1;


    }

    document.getElementById("endBtn").onclick = function () {
        endBtn()
        document.querySelector(".containerMain").style.backgroundColor = "black";

    }

}


function validate() {

    if (remainGuess != 0) {
        if (randomNum == inputValue()) {
            alert("Congratulations! Your Gues the Correct Number",)
            document.getElementById("finalResult").innerHTML = `<span style="font-size:22px; font-weight:600;color:green ; padding:14px 0px; ">Congratulations!</span> <br>You won the Game</span>`;
            document.getElementById("input").disabled = true;
            document.getElementById("btn").disabled = true;


        }
        else {
            document.getElementById("finalResult").innerHTML = `<b>Incorrect Number</b>`

        }
    }
    else {
        alert("Attempt Completed. You Failed to guess the Number");

        document.getElementById("finalResult").innerHTML = `<span style="font-size:22px; font-weight:600;color:red ; padding:14px 0px; ">You failed!</span> <br>Please try again.The Number was ${randomNum}</span>`;
        document.getElementById("input").disabled = true;
        document.getElementById("btn").disabled = true;
    }

}



// All displays

// None
function noDisplay() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("endBtn").style.display = "none"
}
// Show
function show() {
    document.querySelector(".container").style.display = "block";
    document.getElementById("endBtn").style.display = "block"
    prevGuess = [];
    remainGuess = 10
    document.getElementById("guessRemaining").innerHTML = remainGuess;
    document.getElementById("prevGuess").innerHTML = prevGuess;
    document.querySelector("body").style.backgroundColor = 'white'
}



// End Button Code


function endBtn() {

    document.querySelector(".container").style.display = "none";
    document.getElementById("startBtn").style.display = "block";
    document.getElementById("endBtn").style.display = "none";
    prevGuess = [];
    remainGuess = 10
    document.getElementById("guessRemaining").innerHTML = remainGuess;
    document.getElementById("prevGuess").innerHTML = prevGuess;
    document.querySelector("body").style.backgroundColor = 'black'
    document.getElementById("input").value = ''
    randomNum = ramNum()
    document.getElementById("input").disabled = false;
    document.getElementById("btn").disabled = false;
    document.getElementById("finalResult").innerHTML = ``
}