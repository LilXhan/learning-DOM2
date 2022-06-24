/// Template
// Es un mecanismo para mantener el contenido HTML del lado del cliente que no se renderiza cuando se carga una pagina
// Piensa en la plantilla como un fragmento de contenido que esta siendo almacenado para un uso posterior en el documento
// El template tiene un documentFragment en su propiedad
// El template genera un fragment con la propiedad content
const ol = document.querySelector('#list');
const paises = ['Bolivia', 'Canada', 'Estados Unidos', 'Chile'];

const template = document.querySelector('#template');

const clone = template.content.cloneNode(true);
clone.querySelector('.title').textContent = 'Pais';
clone.querySelector('p').textContent = 'Peru';

// console.log(clone);
ol.appendChild(clone)


