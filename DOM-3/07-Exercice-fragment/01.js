const ol = document.querySelector('#list');
const paises = ['Bolivia', 'Canada', 'Estados Unidos', 'Chile'];
const fragment = document.createDocumentFragment();

paises.forEach((pais) => {

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-start';

  const divTitle = document.createElement('div');
  divTitle.className = 'ms-2 me-auto';
  divTitle.textContent = 'Pais:';

  const p = document.createElement('p');
  p.textContent = pais;
  
  li.appendChild(divTitle);
  divTitle.appendChild(p);
  fragment.appendChild(li);
});

ol.appendChild(fragment);





