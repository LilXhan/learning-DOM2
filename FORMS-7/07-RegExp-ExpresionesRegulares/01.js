/// Expresiones regulares

// Las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se utilizan para hacer coincidir patrones que se utilizan
// para hacer coincidir combinaciones de caracteres en cadena

// Se usan mayormente en validaciones de DNI, Correos, etc

// Flags en una RegExp

// La i significa que ignora mayusculas y minisculas
// La g sinficia busqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una
// m multilinea

const regExp = /bluuweb/i // La i significa que ignora mayusculas y minisculas

const exObj = new RegExp('bluuweb', 'i');

/// Metodos RegExp

console.log(regExp.test('bluuweb')); // consola: true
console.log(regExp.test('dsadas bluuweb')); // consola: false

const newRegExp = /[ue]/i

console.log(newRegExp.test('dsadsa blueweb ue')); // consola: true

const regExpOr = /bluuweb|bluweb/i

console.log(regExpOr.test('bluweb')); // consola: true
console.log(regExpOr.test('bluuweb')); //consola: true
console.log(regExpOr.test('dsadsabludsadsa')); // consola: false

const regExpDni = /^\d{8}(?:[-\s]\d{4})?$/

console.log(regExpDni.test('12345678')); // consola: true
console.log(regExpDni.test('1234567')); // consola: false

const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

console.log(regExpEmail.test('alvarado@gmail.com')); // consola: true
console.log(regExpEmail.test('ddsad')) // consola: false
