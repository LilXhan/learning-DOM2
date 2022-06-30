// LISTA DE COMPRAS O CARRITO
const templateList = document.querySelector('#listItem');
const list = document.querySelector('#listaCarrito');
const fragmentList = document.createDocumentFragment();
// PRECIO TOTAL
const total = document.querySelector('#total');
const templateTotal = document.querySelector('#totalCompra');
// CODIGO
let arrayFrutas = [];

document.addEventListener('click', (e) => {
  if (e.target.matches('.container .btn')) {
    handler(e);
  };
  if (e.target.matches('.card .btn-success')) {
    eventSuccess(e);
  };
  if (e.target.matches('.card .btn-danger')) {
    eventDelete(e);
  };
});

const handler = (e) => {
  const fruta = {
    nombre: e.target.dataset.fruta,
    cantidad: 1,
    precio: Number(e.target.dataset.precio)
  };

  const comprobacion = arrayFrutas.some(item => {
    return item.nombre === fruta.nombre;
  });

  const indice = arrayFrutas.findIndex(item => {
    return item.nombre === fruta.nombre;
  });

  if (comprobacion === false) {
    arrayFrutas.push(fruta);
  } else {
    arrayFrutas[indice].cantidad++;
    // arrayFrutas[indice].precio = arrayFrutas[indice].precio + Number(e.target.dataset.precio);
  };
  add();
};

const add = () => {
  list.textContent = '';

  arrayFrutas.forEach((item) => {
    const cloneList = templateList.content.firstElementChild.cloneNode(true);
    cloneList.querySelector('h5').textContent = item.nombre;
    cloneList.querySelector('span').textContent = item.cantidad;
    cloneList.querySelector('p').textContent = `$${item.precio}`;
    cloneList.querySelector('.btn-success').dataset.id = item.nombre;
    cloneList.querySelector('.btn-danger').dataset.id = item.nombre;
    fragmentList.appendChild(cloneList);
  });
  list.appendChild(fragmentList);
  addFinalCompra();
};

const addFinalCompra = () => {
  total.textContent = '';
  const totalPrecio = arrayFrutas.reduce((acc, current) => acc + current.precio * current.cantidad, 0);
  const cloneTotalCompra = templateTotal.content.firstElementChild.cloneNode(true);
  cloneTotalCompra.querySelector('h5').textContent = `Total: $${totalPrecio}`;
  total.appendChild(cloneTotalCompra);
};

const eventSuccess = (e) => {
  arrayFrutas = arrayFrutas.map(item => {
    if (item.nombre === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  add();
};

const eventDelete = (e) => {
  arrayFrutas = arrayFrutas.filter((item) => {
    if (e.target.dataset.id === item.nombre && item.cantidad > 0) {
      item.cantidad--;
      if (item.cantidad === 0) return;
      return item;
    } else {
      return item;
    }
  });
  add();
};
