"use strict";

var menuItems = document.querySelectorAll('.navigation__link');
var subMenuItems = document.querySelectorAll('.navigation__submenu-link');

var menuItemClickHandler = function menuItemClickHandler(evt, selector) {
  var item = evt.target.parentElement;
  var subMenu = item.querySelector(selector);

  if (subMenu) {
    subMenu.classList.toggle('hidden');
    item.classList.toggle('active');
    menuItems.forEach(function (it) {
      if (it.parentElement !== item) {
        it.parentElement.classList.toggle('hidden');
      }
    });
  }
};

var subMenuItemClickHandler = function subMenuItemClickHandler(evt, selector) {
  var item = evt.target.parentElement;
  var subMenu = item.querySelector(selector);

  if (subMenu) {
    subMenu.classList.toggle('hidden');
    item.classList.toggle('active');
    subMenuItems.forEach(function (it) {
      if (it.parentElement !== item) {
        var element = it.parentElement.querySelector(selector);

        if (!element.classList.contains('hidden')) {
          element.classList.toggle('hidden');
        }
      }
    });
  }
};

menuItems.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    menuItemClickHandler(evt, '.navigation__submenu');
  });
});
subMenuItems.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    subMenuItemClickHandler(evt, '.navigation__submenu-last');
  });
});