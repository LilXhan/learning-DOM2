// Array methods

// estos metodos no mutan al original

/// find

// el metodo find() devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada
// devuelve el primer elemento que concuerde entonces es para buscar

const users = [
  { nombre: 'Flavio', edad: 15, id: 1 },
  { nombre: 'Nayara', edad: 20, id: 2 },
  { nombre: 'Pedrito', edad: 30, id: 3 },
  { nombre: 'Brigith', edad: 54, id: 4 }
];

const nayara = users.find((user) => {
  return user.id === 2;
});

console.log(nayara); // consola: {nombre:"Nayara", edad: 20, id: 2}

const { edad } = users.find(item => {
  return item.id === 4;
});

console.log(edad); // consola: 54

/// some
// comprueba si almenos 1 elemento del array cumple con la condicion implementada por la funcion proporcionada (true o false)

const existe = users.some(item => {
  return item.nombre === 'Flavio';
});

console.log(existe); // console: true

/// findIndex
// el metodo finIndex devuelve un indice del primer elemento de un array que cumpla con la funcion de prueba proporcionada. En caso contrario
// devuelve -1

const indice = users.findIndex(item => {
  return item.nombre === 'Brigith';
});

console.log(indice); // consola: 3
console.log(users[indice]); // consola: {nombre: "Brigith",edad: 54,id: 4

const noExiste = users.findIndex(item => {
  return item.id === 5;
});

console.log(noExiste); // consola: -1
