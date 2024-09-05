// Get the input box and buttons
const inputBox = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');
let operator = '';
let num1 = '';
let num2 = '';

// Define a function to handle button clicks
function handleClick(event) {
  const buttonValue = event.target.textContent;
  const currentValue = inputBox.value;

  // Handle operator buttons
  if (buttonValue === 'AC') {
    inputBox.value = '';
    operator = '';
    num1 = '';
    num2 = '';
  } else if (buttonValue === 'Del') {
    inputBox.value = currentValue.slice(0, -1);
  } else if (buttonValue === '%') {
    operator = '%';
    inputBox.value += '%';
  } else if (buttonValue === '+/-' || buttonValue === '+/-') {
    inputBox.value = -currentValue;
  } else if (buttonValue === '=') {
    if (operator === '%') {
      const numbers = currentValue.split('%');
      if (numbers.length === 2) {
        num1 = parseFloat(numbers[0]);
        num2 = parseFloat(numbers[1]);
        if (!isNaN(num1) && !isNaN(num2)) {
          inputBox.value = num1 % num2;
        } else {
          inputBox.value = 'Error';
        }
      } else {
        inputBox.value = 'Error';
      }
    } else {
      try {
        inputBox.value = eval(currentValue);
      } catch (error) {
        inputBox.value = 'Error';
      }
    }
  } else {
    // Handle number and operator buttons
    inputBox.value += buttonValue;
  }
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});
