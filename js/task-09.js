const btnChange = document.querySelector('.change-color');
const styleWindow = document.querySelector('body');
const color = document.querySelector('.color');

btnChange.addEventListener('click', () => getRandomHexColor());
function getRandomHexColor(event) {
  const createNewColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
  console.log(createNewColor);
  color.textContent = createNewColor;
  styleWindow.style.backgroundColor = createNewColor;  
}