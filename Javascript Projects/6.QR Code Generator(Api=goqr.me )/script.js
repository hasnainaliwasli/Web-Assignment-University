let imgBox = document.getElementById('image')


document.getElementById('btn').onclick = () => {
    let value = document.getElementById('input').value;
    let link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(value);
    document.getElementById('img').src = link;

    imgBox.classList.add('show-img');
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



