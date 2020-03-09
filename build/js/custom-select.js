"use strict";

var toggleForm = document.querySelector('.custom-select__form');
var optionsBlock = document.querySelector('.custom-select__options');
var options = document.querySelectorAll('.custom-select__option');
var selectOption = document.querySelector('.custom-select__status');
var input = document.querySelector('.custom-select__input');

var closeOptionsBlockHandler = function closeOptionsBlockHandler(evt) {
  if (evt.target !== optionsBlock && evt.target.parentsNode !== optionsBlock) {
    optionsBlock.classList.toggle('hidden');
    document.removeEventListener('click', closeOptionsBlockHandler);
  }
};

toggleForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  optionsBlock.classList.toggle('hidden');
  options.forEach(function (option) {
    option.addEventListener('click', function (evt) {
      selectOption.innerHTML = evt.target.innerHTML;
      input.setAttribute('value', evt.target.textContent.trim());
      document.addEventListener('click', closeOptionsBlockHandler);
    });
  });
});