let plusBtn = document.getElementById('plusBox');
let minusBtn = document.getElementById('minusBox');
let counter = document.getElementById('counter');
let counterNum = 0



// Toastify Script function

function toastify(text, position) {
    Toastify({
        text: text,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


//Adding Button to increase Value 

plusBtn.addEventListener('click', function () {
    counterNum += 1;
    counter.innerHTML = counterNum;
})


// Minus Button to Decrease the Value

minusBtn.addEventListener('click', function () {
    if (counterNum > 0) {
        counterNum -= 1;
        counter.innerHTML = counterNum;
    }
    else {
        toastify('Number Cannot be below Zero', 'center')
    }
})