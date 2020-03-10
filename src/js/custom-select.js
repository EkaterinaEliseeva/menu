const toggle = document.querySelector('.custom-select__link_status');
const optionsBlock = document.querySelector('.custom-select__options');
const options = document.querySelectorAll('.custom-select__option');
const selectOption = document.querySelector('.custom-select__status');

const changeHiddenOption = () => {
    options.forEach(option => {
        if (option.querySelector('span').textContent === selectOption.querySelector('span').textContent) {
            option.classList.add('hidden');
        } else {
            option.classList.remove('hidden');
        }
    });
};

changeHiddenOption();

toggle.addEventListener('click', (evt)=> {
    evt.preventDefault();

    optionsBlock.classList.toggle('hidden');
    toggle.classList.toggle('opened');

    options.forEach((option) => {
        option.addEventListener('click', (evt) => {

            toggle.innerHTML = evt.target.innerHTML;

            changeHiddenOption();
        });
    });


});

