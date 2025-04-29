'use strict';

const textInput = document.querySelector('input#name-input');
const spanOutput = document.querySelector('span#name-output');

textInput.addEventListener('input', event => {
  const inputText = String(event.currentTarget.value).trim();
  spanOutput.textContent = inputText === '' ? 'Anonymous' : inputText;
});
