// Array methods

// estos metodos no mutan al original

/// reduce

// el metodo reduce ejecuta una funcion reductora sobre cada elemento de un array devolviendo commo resultado
// su unico valor

const numeros = [1, 2, 3, 4, 5];

const sum = numeros.reduce((acc, valorActual) => {
  return acc + valorActual;
});

console.log(sum); // consola: 15

const numeros2 = [
  [1, 2],
  [3, 4],
  [5, 6]
];

const soloNum = numeros2.reduce((acc, valorActual) => [...acc, ...valorActual]);

console.log(soloNum); // consola: [1,2,3,4,5,6]

const soloArray = [].concat(...numeros2);
console.log(soloArray); // consola: [1,2,3,4,5,6]

const arrayPlano = numeros2.flat();
console.log(arrayPlano); // consola: [1,2,3,4,5,6] (RELATIVAMENTE NUEVA)
