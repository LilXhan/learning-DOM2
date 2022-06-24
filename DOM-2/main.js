/// createElement
// El metodo document.createElement() crea un elemento HTML especificado por su tagName

const list = document.getElementById('list');

const li = document.createElement('li');

li.textContent = 'elemento desde js';
console.log(li)

/// appendChild
// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado

list.appendChild(li)

////

const paises = ['Peru', 'Bolivia', 'Colombia'];
paises.forEach((pais)=> {

})
