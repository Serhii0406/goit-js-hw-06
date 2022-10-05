const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const liRel = document.createElement('li');
  liRel.textContent = ingredient
  liRel.classList.add('item');
  return liRel;
})

const ulRef = document.querySelector('#ingredients');
ulRef.append(...elements);