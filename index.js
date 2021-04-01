/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(strTime) {
  const time = parseInt(strTime);
  if (time < 12 ) {
    return "Good Morning"
  }
  if (time > 17) {
    return "Good Evening"
  }
    return "Good Afternoon"
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}

/* Write your implementation of displayMessage() */

