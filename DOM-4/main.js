const list = document.querySelector('#list');
const templateList = document.querySelector('#templateList');
const fragmentList = document.createDocumentFragment();
const btns = document.querySelectorAll('.btn');

const arrayFrutas = [];

const handler = (event) => {
  const fruta = {
    nombre: event.target.dataset.fruta,
    cantidad: 1
  };

  const verificacion = arrayFrutas.some(item => {
    return item.nombre === fruta.nombre;
  });

  const indice = arrayFrutas.findIndex(item => {
    return item.nombre === fruta.nombre;
  });

  if (verificacion === false) {
    arrayFrutas.push(fruta);
  } else {
    arrayFrutas[indice].cantidad++;
  }

  add(arrayFrutas);
};

const add = (array) => {
  list.textContent = '';
  array.forEach((item) => {
    const clone = templateList.content.firstElementChild.cloneNode(true);
    clone.querySelector('#fruit').textContent = item.nombre;
    clone.querySelector('.badge').textContent = item.cantidad;
    fragmentList.appendChild(clone);
  });
  list.appendChild(fragmentList);
};

btns.forEach((btn) => btn.addEventListener('click', handler));
