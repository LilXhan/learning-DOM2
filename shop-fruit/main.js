const btns = document.querySelectorAll('.btn');
const fragment = document.createDocumentFragment();
const carritoList = document.querySelector('#carritoList');
const ul = document.querySelector('.list-group');

const handler = (evento) => {
  console.log(evento.target.dataset.fruta);

  const fruta = {
    titulo: evento.target.dataset.fruta,
    id: evento.target.dataset.fruta,
    cantidad: 1
  };

  if (carrito.hasOwnProperty(fruta.titulo)) {
    fruta.cantidad = carrito[fruta.titulo].cantidad + 1;
  };
  carrito[fruta.titulo] = fruta;
  pintarLista();
};

const pintarLista = () => {
  ul.textContent = ''; // que el contenido donde vamos a tener la siguiente funcion sea vacio asi evitaras que se repita

  Object.values(carrito).forEach(frut => {
    const clone = carritoList.content.firstElementChild.cloneNode(true);
    clone.querySelector('.title-group').textContent = frut.titulo;
    clone.querySelector('.badge').textContent = frut.cantidad;
    fragment.appendChild(clone);
  });
  ul.appendChild(fragment);
};

const carrito = {

};

btns.forEach(boton => boton.addEventListener('click', handler));
