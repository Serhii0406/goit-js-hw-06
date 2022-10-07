const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', changeNameIf)
function changeNameIf(event) {
   if (event.currentTarget.value !== "") {
     outputRef.textContent = event.currentTarget.value;
   } else {
     outputRef.textContent = "Anonymous";
}
}