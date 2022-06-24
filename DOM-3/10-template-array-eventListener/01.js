const list = document.querySelector('#list');
const template = document.querySelector('#template');

const fragment = document.createDocumentFragment();

const click = (e) => {console.log('me diste click', e.target)} // nos dice donde le dimos click


const paises = ['Polonia', 'España', 'Brazil', 'Colombia'];

paises.forEach(pais => { 
  const clone = template.content.firstElementChild.cloneNode(true); // si queremos tener un event listener dentro de nuestro template tendremos
  clone.querySelector('span').textContent = pais;                   // que usar la propiedad firstElementChild.
  fragment.appendChild(clone);

  clone.addEventListener('click', click)  
});
list.appendChild(fragment)



