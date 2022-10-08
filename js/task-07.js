const input = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
input.addEventListener('input',changeFontSize)
function changeFontSize(event) {
    textRef.style.fontSize = event.currentTarget.value + "px"
}