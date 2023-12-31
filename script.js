const greetingElement = document.getElementById('greeting');
const nameForm = document.getElementById('nameForm');
const clearButton = document.getElementById('clearButton');
const storedName = localStorage.getItem('userName');
const userNameInput = document.getElementById('userName');

if (storedName) {
  displayGreeting(storedName);
} else {
  greetingElement.textContent = 'Welcome! Please enter your name.';
}

// Form submission event listener
nameForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const userName = userNameInput.value.trim();

  if (userName !== '') {
    localStorage.setItem('userName', userName);
    displayGreeting(userName);
  }
});

// Clear button event listener
clearButton.addEventListener('click', function () {
  localStorage.removeItem('userName');
  greetingElement.textContent = 'Welcome! Please enter your name.';
  userNameInput.value = '';
  greetingElement.classList.remove('greeted');
});

// Function to display personalized greeting
function displayGreeting(name) {
  greetingElement.textContent = `Happy holidays, ${name}! May your days be filled with warmth, laughter, and all the joy this festive season brings. Cheers to wonderful moments and delightful celebrations!`;
  greetingElement.classList.add('greeted');
}
