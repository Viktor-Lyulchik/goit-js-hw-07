'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = String(form.elements.email.value).trim();
  const password = String(form.elements.password.value).trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  } else {
    console.log({ email, password });
  }
  form.reset();
}
