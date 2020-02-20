document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.createElement('button');
  const body = document.querySelector('body');
  body.appendChild(button);
  button.textContent = 'Delete';
  button.addEventListener('click', handleButtonClick);
});

const handleButtonClick = function () {
  const readingList = document.querySelector('ul');
  readingList.innerHTML = '';
};

const handleFormSubmit = function () {
  event.preventDefault();
  const newListItem = document.createElement('li');
  const list = document.querySelector('ul');
  list.appendChild(newListItem);
  console.log(event.target);
  newListItem.textContent = `Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}.`
  event.target.reset();
};
