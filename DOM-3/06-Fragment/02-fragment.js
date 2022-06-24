/// Fragment
// firstChild -> saca el primer elemento

const list = document.querySelector('#list');
const paises =  ['Bolivia','Canada','Estados Unidos']

const fragment = document.createDocumentFragment();
//const fragment = new DocumentFragment();

paises.forEach((pais) => {
  const newNode = document.createElement('li');
  newNode.textContent = pais;
  
  const refNode = fragment.firstChild;

  fragment.insertBefore(newNode, refNode);

});

list.appendChild(fragment);

