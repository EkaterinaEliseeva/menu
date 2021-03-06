let menuItems = document.querySelectorAll('.navigation__link');
let subMenuItems = document.querySelectorAll('.navigation__submenu-link');

const menuItemClickHandler = (evt, selector) => {
  let item = evt.target.parentElement;
  let subMenu = item.querySelector(selector);

  if (subMenu) {
      subMenu.classList.toggle('hidden');
      item.classList.toggle('active');

      menuItems.forEach(it=> {
          if (it.parentElement !== item) {
              it.parentElement.classList.toggle('hidden');
          }
      });
  }
};

const changeActiveClass = (activeItem) => {
    subMenuItems.forEach(it => {
        if (it.parentElement !== activeItem && it.parentElement.classList.contains('active')) {
            it.parentElement.classList.remove('active');
        }
    });
};

const subMenuItemClickHandler = (evt, selector) => {
    let item = evt.target.parentElement;
    let subMenu = item.querySelector(selector);
    item.classList.toggle('active');

    if (subMenu) {
        subMenu.classList.toggle('hidden');

        changeActiveClass(item);

        subMenuItems.forEach(it=> {
            if (it.parentElement !== item) {
                const element = it.parentElement.querySelector(selector);

                if (element && !element.classList.contains('hidden')) {
                    element.classList.toggle('hidden');
                }

            }
        });
    }
};

menuItems.forEach((item)=>{
    item.addEventListener('click', function(evt) {
        menuItemClickHandler(evt, '.navigation__submenu');
    });
});

subMenuItems.forEach((item)=>{
    item.addEventListener('click', function(evt) {
        subMenuItemClickHandler(evt, '.navigation__submenu-last');
    });
});