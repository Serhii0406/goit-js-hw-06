const categories = document.querySelectorAll('.item');
console.log(' ');
console.log(`Number of categories: ${categories.length}`);
console.log(' ');

categories.forEach(category => {
    console.log(`Elements: ${category.firstElementChild.textContent}`);
    console.log('');
    console.log(`Elements: ${category.lastElementChild.children.length}`);    
    console.log('');
});