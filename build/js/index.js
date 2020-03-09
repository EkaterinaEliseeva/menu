"use strict";

/* opening and closing menu */
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');
var menuCloseButton = menu.querySelector('.menu__close-button');

var menuToggleClickHandler = function menuToggleClickHandler(evt) {
  evt.preventDefault();
  menu.classList.toggle('hidden');
};

menuToggle.addEventListener('click', menuToggleClickHandler);

var menuCloseBtnClickHandler = function menuCloseBtnClickHandler(evt) {
  evt.preventDefault();
  menu.classList.add('animation-hidden');
  setTimeout(function () {
    menu.classList.toggle('hidden');
    menu.classList.remove('animation-hidden');
  }, 380);
};

menuCloseButton.addEventListener('click', menuCloseBtnClickHandler);
/* opening and closing search form */

var searchForm = document.querySelector('.search-form');
var searchOpenBtn = searchForm.querySelector('.search-form__button');
var searchCloseBtn = searchForm.querySelector('.search-form__close-button');

var searchBtnClickHandler = function searchBtnClickHandler(evt) {
  evt.preventDefault();
  searchForm.classList.toggle('active');
  menu.classList.toggle('search-active');
  searchOpenBtn.classList.toggle('hidden');
};

searchOpenBtn.addEventListener('click', searchBtnClickHandler);
searchCloseBtn.addEventListener('click', searchBtnClickHandler);