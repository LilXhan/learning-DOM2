// Array methods

// estos metodos no mutan al original

/// slice

// el metodo slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por el inicio
// hasta el fin (fin no incluido). EL array original no se modificara

const animales = ['perro', 'gato', 'venado', 'cerdito'];
//                   0       [ 1       2 ]          3

const arrayNuevo = animales.slice(1, 3);

console.log(arrayNuevo); // consola: ['gato', 'venado']

/// concat
// el metodo concat() se usara para unir dos o mas arrays. Este metodo no cambia los arrays, existentes, si no
// que devuelve un nuevo array

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const newArray = array1.concat(array2);

console.log(newArray); // consola: [1,2,3,4,5,6,7,8,9,10]

// spreadSyntax
// permite a un elemento iterable tal como como un arreglo o cadena ser expandido en lugares donde son esperados

const array3 = ['a', 'b', 'c'];
const array4 = ['d', 'e', 'f'];

const array5 = [...array3, ...array4];

console.log(array5); // consola: ['a','b','c','d','e','f']

function problem (x) {
  return x >= 0 || x <= 0 ? x * 50 + 6 : 'Error';
}

console.log(problem(''));
