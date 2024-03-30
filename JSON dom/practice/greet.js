
let noOfPress = localStorage.getItem('noOfPress') || 0;  //use to store the value on browser after refressing the value will be same where we left
function buttonCall(){   //create a button function  link with onclick
  noOfPress++;
  localStorage.setItem('noOfPress', noOfPress);   // store in the local storage
  updateButton();  //asign updated value
}

function updateButton(){
  let button = document.querySelector('#my_button');
  if(noOfPress % 2 === 0){
    button.classList.remove('js-odd');
    button.classList.add('js-even');
  }
  else{
    button.classList.remove('js-even');
    button.classList.add('js-odd');
  }
  button.innerText = noOfPress;

}

updateButton();  //asign dafault value

function doGreeting(personName){

// Get the current date and time
let CurrHour = new Date();

// Output the current date and time to the console
console.log(CurrHour);

// Extract the current hour from the date object
let time = CurrHour.getHours();

// Output the current hour to the console
console.log(time);

// Get the heading element from the HTML document
let heading = document.querySelector('#greeting');

// Determine the appropriate greeting based on the time of day
if (time > 5 && time < 12) {
  // If the time is between 6 AM and 11:59 AM, display "Good Morning"
  heading.innerText = `Good Morning: ${personName} `;
} else if ((time >= 12 && time < 16) || time === 12) {
  // If the time is between 12 PM and 3:59 PM, display "Good Afternoon"
  heading.innerText = `Good Afternoon:  ${personName} `;
} else if (time >= 16 && time < 19) {
  // If the time is between 4 PM and 6:59 PM, display "Good Evening"
  heading.innerText = `Good Evening:  ${personName} `;
} else {
  // If the time is between 7 PM and 5:59 AM, display "Good Night"
  heading.innerText = `Good Night:  ${personName} `;
  }
}

doGreeting('Smit');
doGreeting('Sk');