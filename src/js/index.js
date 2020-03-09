/* opening and closing menu */
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuCloseButton = menu.querySelector('.menu__close-button');


const menuToggleClickHandler = (evt) => {
  evt.preventDefault();
  menu.classList.toggle('hidden');
};

menuToggle.addEventListener('click', menuToggleClickHandler);

const menuCloseBtnClickHandler = (evt) => {
  evt.preventDefault();
  menu.classList.add('animation-hidden');
  setTimeout(()=>{
    menu.classList.toggle('hidden');
    menu.classList.remove('animation-hidden');
  }, 380)

};

menuCloseButton.addEventListener('click', menuCloseBtnClickHandler);

/* opening and closing search form */
const searchForm = document.querySelector('.search-form');
const searchOpenBtn = searchForm.querySelector('.search-form__button');
const searchCloseBtn = searchForm.querySelector('.search-form__close-button');

const searchBtnClickHandler = (evt) => {
  evt.preventDefault();
  searchForm.classList.toggle('active');
  menu.classList.toggle('search-active');
  searchOpenBtn.classList.toggle('hidden');
};

searchOpenBtn.addEventListener('click', searchBtnClickHandler);
searchCloseBtn.addEventListener('click', searchBtnClickHandler);
