/// Delegacion de Eventos

// la delegacion de eventos es basicamente un patron para manejar eventos de manera eficiente

// en lugar de agregar un detector de eventos a todos y cada uno de los elementos similares, podemos
// agregar un detector de eventos a un elemento principal y llamar a un evento en un objetivo particular
// utilizando la propiedad .target del objeto del evento

const container = document.querySelector('.container');

container.addEventListener('click', e => {
  if (e.target.dataset.div === 'divPadre') {
    console.log('diste click al padre');
  } else if (e.target.id === 'hijo') {
    console.log('diste click al hijo');
  }

  // console.log(e.target.matches('.border-secondary'));
  if ((e.target.matches('.border-danger'))) {
    console.log('diste click al nieto');
  }
});

// matches

// el metodo matches comprueba si el element seria seleccionable por el selector CSS especificado en la cadena
// en caso contrario retorna false
