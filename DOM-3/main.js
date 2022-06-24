
const fruits = document.querySelector('#fruits');
const templateFruit = document.querySelector('#templateFruit');
const arrayFruit = ['Banana', 'Pera', 'Mandarina'];

const fragmentFruit = document.createDocumentFragment();


arrayFruit.forEach((fruit) => {
  const cloneTemplateFruit = templateFruit.content.cloneNode(true);
  cloneTemplateFruit.querySelector('.fruit').textContent = fruit;
  cloneTemplateFruit.querySelector('.btn').textContent = 'Agregar';
  fragmentFruit.appendChild(cloneTemplateFruit);


})



fruits.appendChild(fragmentFruit);
