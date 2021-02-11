// Get the button that we want to detect presses from
const button = document.getElementById('pressme')

// Function that runs when the button is clicked
function onclick() {
  // Show "Hello, WOrld" message
  alert("Hello, World!")
}

// Add event listener to button
button.addEventListener("click", onclick)