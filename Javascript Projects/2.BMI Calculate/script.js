let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = Number(document.querySelector("#height").value)
    let weight = Number(document.querySelector("#weight").value);
    height = height * height
    let bmi = (weight / height).toFixed(2)
    let result = ''

    if (height == '' || isNaN(height) || height < 0) {
        alert("please enter a valid Height")
        document.querySelector(".output").innerHTML = ''
        document.querySelector("#height").value = ''
        document.querySelector("#weight").value = ''
    }
    else if (weight == '' || isNaN(weight) || weight < 0) {
        alert("please enter a valid Weight")
        document.querySelector(".output").innerHTML = ''
        document.querySelector("#weight").value = ''
        document.querySelector("#height").value = ''
    }
    else {
        if (bmi <= 18.6) {
            result = `Your BMI is ${bmi} <br> You are Under Weight.`
        }
        else if (bmi > 18.6) {
            result = `Your BMI is ${bmi} <br> You are Normal Weight.`
        }
        else {
            result = `Your BMI is ${bmi} <br> You are Over Weight.`
        }
    }
    document.querySelector(".output").innerHTML = result

})