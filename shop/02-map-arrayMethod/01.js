/// Array methods

// estos metodos no mutan el array original

/// map

// el metodo map itera sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la funcion callaback
// en cada elemento. Esto lo hace sin mutar al el original

// una funcion callback es una funcion que se pasa a otra funcion como un argumento. que que luego se invoca dentro de la funcion
// externa para completar algun tipo de rutina o accion

const frutas = ['Manzana', 'Pera', 'Mandarina'];

const nuevoArray = frutas.map((frutas) => {
  return frutas;
});

frutas.push('Sandia');

console.log(nuevoArray); // consola: ['Manzana', 'Pera', 'Mandarina']

const users = [
  { nombre: 'Flavio', apellido: 'Alvarado' },
  { nombre: 'Brigith', apellido: 'Lu' },
  { nombre: 'Nayara', apellido: 'Vigilio' },
  { nombre: 'Andrea', apellido: 'Perez' }
];

const nameUser = users.map(user => {
  return user.nombre;
});

console.log(nameUser); // consola: ["Flavio","Brigith","Nayara", "Andrea"]

const sum = (numbers) => {
  const copy = numbers.map((num) => {
    return num;
  });
  let sum = 0;
  copy.forEach(num => {
    sum += num;
  });
  return sum;
};

console.log(sum([1.5, 2, 3])); // consola: 6.5

const num = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = num.map((num) => num * 2);

console.log(newArray); // consola:  [2,4,6,8,10,12,14,16]
