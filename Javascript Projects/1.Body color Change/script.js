let buttons = document.querySelectorAll(".btn")
let body = document.querySelector("body");

buttons.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        body.style.backgroundColor = e.target.id
    })
}
)