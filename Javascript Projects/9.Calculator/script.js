let inputValue = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let AllTyped = '';


// Convert NodeList to array using Array.from
Array.from(buttons).forEach(button => {
   

    button.addEventListener('click', function (e) {

        if(button.value != 'C' ){
        AllTyped += button.value
        console.log("Value = ", AllTyped);
        }else{
            AllTyped = '';
        }

        inputValue.value = AllTyped
    })

});





document.getElementById('clear').onclick = () => {
    inputValue.value = ''
}