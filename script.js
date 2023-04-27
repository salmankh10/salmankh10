function goToLinkedIn() {
  window.location.href = 'https://www.linkedin.com/in/iamrehankhan';
}

function showGreeting(name) {
  const greeting = document.querySelector('.greeting');
  greeting.textContent = `Hello, ${name}!`;
  greeting.style.opacity = 1;
}

const name = 'Rehan Khan';
showGreeting(name);
