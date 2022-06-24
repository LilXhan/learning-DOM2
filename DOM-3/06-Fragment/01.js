/// Fragment
// new DocumentFragment();
// createDocumentFragment();
// Crea un document object liviano en paralelo al original no lo reemplaza 

const list = document.querySelector('#list');
const paises =  ['Bolivia','Canada','Estados Unidos']


const fragment = document.createDocumentFragment();
//const fragment = new DocumentFragment();

paises.forEach((pais) => {
  const li = document.createElement('li');
  li.textContent = `${pais}`;
  fragment.appendChild(li);
});
list.appendChild(fragment);



