/// stopPropagation

// stopPropagation evita la propagacion adicional del evento actual en las fases de captura y bubbling

const cajitas = document.querySelectorAll('.border');

cajitas.forEach(caja => {
  caja.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('me hiciste click');
  });
});

/// prevenDefault

// este metodo detiene lo que hace el navegador

const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
  console.log('me diste click');
  e.preventDefault();
});


