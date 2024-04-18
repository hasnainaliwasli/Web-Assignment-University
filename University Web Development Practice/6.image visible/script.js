// Write HTML and JavaScript code that can toggle the visibility of an image when a button is clicked.
let image = document.getElementById('image')
let btn = document.getElementById('btn')
function visible() {

    if (image.style.display == 'block') {
        image.style.display = 'none'
        btn.innerHTML = 'Display'
    }
    else {
        image.style.display = 'block'
        btn.innerHTML = 'Hide'
    }

}