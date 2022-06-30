/// Array methods

// estos metodos no mutan el array original

/// filter

// el metodo filter crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada
// es igual que cuando trabaja con una hoja de excel y quiere filtrar los datos

const users = [
  { uid: 1, nombre: 'Flavio', edad: 35 },
  { uid: 2, nombre: 'Andrea', edad: 19 },
  { uid: 3, nombre: 'Brigith', edad: 30 },
  { uid: 4, nombre: 'Nayara', edad: 15 }
];

const mayores = users.filter((item) => {
  return item.uid > 1;
});

console.log(mayores); // consola: todos los users menos flavio

// Para eliminar un item de un array

const perros = [
  { nombre: 'Rex', edad: 5, id: 1 },
  { nombre: 'Pancho', edad: 1, id: 2 },
  { nombre: 'Valiente', edad: 10, id: 3 },
  { nombre: 'Bernardo', edad: 11, id: 4 }
];

const newPerros = perros.filter((perro) => {
  return perro.edad !== 11;
});

console.log(newPerros); // consola: todos los perros menos bernardo

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
};

console.log(XO('xo')); // consola; true
