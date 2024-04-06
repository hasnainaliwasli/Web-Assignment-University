let imgBox = document.getElementById('image')


document.getElementById('btn').onclick = () => {
    let inputValue = document.getElementById('input').value;

    console.log(inputValue);
    if (inputValue !== '') {
        document.getElementById('image').innerHTML = '<img src="" alt="" id="img">'

        let link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(inputValue);
        document.getElementById('img').src = link;
        imgBox.classList.add('show-img');
    }
    else {
        let inputField = document.getElementById('input');
        inputField.classList.add('error');

        document.getElementById('image').innerHTML = `<span style="font-size:20px ; font-weight:600 ; color:red">Please Type your text!</span>`;
        setTimeout(() => {
            inputField.classList.remove('error'); // Remove error class from the input field
        }, 1000);
    }

}




// document.getElementById('btn').onclick = () => {
//     let value = document.getElementById('input').value;
//     if (!value) {
//         alert('Input value is empty');
//         return;
//     }

//     let link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(value);

//     fetch(link)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.blob();
//         })
//         .then(blob => {
//             let imgUrl = URL.createObjectURL(blob);
//             document.getElementById('img').src = imgUrl;
//         })
//         .catch(error => {
//             console.error('Error fetching QR code:', error);
//         });
// };



