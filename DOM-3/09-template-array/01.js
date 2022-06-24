const list = document.querySelector('#list');
const template = document.querySelector('#template');

const fragment = document.createDocumentFragment();

const paises = ['Polonia', 'España', 'Brazil', 'Colombia'];

paises.forEach(pais => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('span').textContent = pais;
  fragment.appendChild(clone);
});
list.appendChild(fragment)



