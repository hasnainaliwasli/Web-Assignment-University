

// Get the range input and output element
const rangeInput = document.getElementById('rangeInput');
const outputValue = document.getElementById('output');

// Add event listener to range input
rangeInput.addEventListener('input', function() {
    // Update the value of the output element
    outputValue.textContent = this.value;
});
