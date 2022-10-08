const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validInput);

function validInput(event) {
    inputRef.classList.remove(`valid`);
    inputRef.classList.remove(`invalid`);
    console.log(event.currentTarget.value)
    if (event.currentTarget.value.length === +(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid')
    }
}
