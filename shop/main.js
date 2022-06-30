// lista carrito

const list = document.querySelector('#list');
const templateList = document.querySelector('#templateList');
const fragmentList = document.createDocumentFragment();

// CompraTotal

const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');

// delegacion de eventos

document.addEventListener('click', (e) => {
  // console.log(e.target.matches('.card .btn-outline-primary'));
  if (e.target.matches('.card .btn-outline-primary')) {
    // console.log('diste click en agregar al carrito');
    handler(e);
  }

  // console.log(e.target.matches('.list-group-item .btn-success'));
  if (e.target.matches('#list .list-group-item .btn-success')) {
    // console.log('me diste click');
    btnAumentar(e);
  }

  if (e.target.matches('#list .list-group-item .btn-danger')) {
    btnEliminar(e);
  }
});

let arrayFrutas = [];

const handler = (event) => {
  const fruta = {
    nombre: event.target.dataset.fruta,
    cantidad: 1,
    precio: Number(event.target.dataset.precio)
  };

  const verificacion = arrayFrutas.some((item) => {
    return item.nombre === fruta.nombre;
  });

  const indice = arrayFrutas.findIndex((item) => {
    return item.nombre === fruta.nombre;
  });

  if (verificacion === false) {
    arrayFrutas.push(fruta);
  } else {
    arrayFrutas[indice].cantidad++;
    // arrayFrutas[indice].precio = arrayFrutas[indice].cantidad * fruta.precio;
  }

  add();
};

const precioTotal = () => {
  footer.textContent = '';
  const precioAll = arrayFrutas.reduce((acc, current) => acc + current.precio * current.cantidad, 0); // el 0 significa que devolvera un numero

  if (precioAll > 0) {
    const cloneTemplateFooter = templateFooter.content.cloneNode(true);
    cloneTemplateFooter.querySelector('.lead span').textContent = precioAll;
    footer.appendChild(cloneTemplateFooter);
  }
};

const add = () => {
  list.textContent = '';
  arrayFrutas.forEach((item) => {
    const clone = templateList.content.firstElementChild.cloneNode(true);
    clone.querySelector('#fruit').textContent = item.nombre;
    clone.querySelector('.badge').textContent = item.cantidad;
    clone.querySelector('.list-group-item .lead').textContent = `$${
      item.precio * item.cantidad
    }`;
    clone.querySelector('div .btn-success').dataset.id = item.nombre;
    clone.querySelector('div .btn-danger').dataset.id = item.nombre;
    fragmentList.appendChild(clone);
  });
  list.appendChild(fragmentList);
  precioTotal();
};

const btnAumentar = (e) => {
  // console.log('me diste click', e.target.dataset.id);

  arrayFrutas = arrayFrutas.map(item => {
    if (item.nombre === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  add();
};

const btnEliminar = (e) => {
  // console.log('me diste click en eliminar');

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
