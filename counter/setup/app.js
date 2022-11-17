// set the initial value to be zero

let count = 0;

//target the value via the button

const buttons = document.querySelectorAll('.btn');
// console.log('select all btn',buttons);
const value = document.querySelector('#value');
// console.log('Target value of count', value);


buttons.forEach(function (button) {
  // console.log('iterate through the buttons', button)
  
  // add event listeners 
  button.addEventListener("click", function (event) {
    // console.log(event.currentTarget.classList);
    const styles = event.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--
    }
    else if (styles.contains('increase')) { 
      count++;
    }
    else {
      count = 0;
    }
    count > 0 ? value.style.color = 'green' : count === 0 ? value.style.color = 'black' : value.style.color = 'red';
    
    value.textContent = count;
    
    
  })
})