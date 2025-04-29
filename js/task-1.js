'use strict';

const arrliItem = document.querySelectorAll('li.item');
console.log('Number of categories:', arrliItem.length);
arrliItem.forEach(liitem => {
  const header = liitem.querySelector('h2');
  console.log('Category:', header.textContent);
  const arrNestedliItem = liitem.querySelectorAll('li');
  console.log('Elements:', arrNestedliItem.length);
});
