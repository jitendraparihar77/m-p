const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Login form submit event
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // Perform login validation here
});

// Registration form submit event
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = registerForm.username.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;
  // Perform registration validation here
});
