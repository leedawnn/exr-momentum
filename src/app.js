const loginForm = document.querySelector('.login-form');
const inputId = document.querySelector('.login-form .id');
const inputPw = document.querySelector('.login-form .password');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = inputId.value;
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener('submit', onLoginSubmit);
