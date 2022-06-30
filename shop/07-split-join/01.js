// Array methods

// estos metodos no mutan al original

/// split
/// join

const candenaMeses = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

const array = candenaMeses.split(','); // consola ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"

console.log(array);

const nuevoTexto = array.join('-');

console.log(nuevoTexto);
