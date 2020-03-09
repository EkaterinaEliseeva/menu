const toggleForm = document.querySelector('.custom-select__form');
const optionsBlock = document.querySelector('.custom-select__options');
const options = document.querySelectorAll('.custom-select__option');
const selectOption = document.querySelector('.custom-select__status');
const input = document.querySelector('.custom-select__input');

const closeOptionsBlockHandler = (evt) => {
    if (evt.target !== optionsBlock && evt.target.parentsNode !== optionsBlock) {
        optionsBlock.classList.toggle('hidden');
        document.removeEventListener('click', closeOptionsBlockHandler);
    }
};

toggleForm.addEventListener('click', (evt)=> {
    evt.preventDefault();

    optionsBlock.classList.toggle('hidden');

    options.forEach((option) => {
        option.addEventListener('click', (evt) => {
            selectOption.innerHTML = evt.target.innerHTML;
            input.setAttribute('value', evt.target.textContent.trim());

            document.addEventListener('click', closeOptionsBlockHandler);
        });
    });


});

