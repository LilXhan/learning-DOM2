/// fetch API

// fetch api proporciona una interfaz para recuperar recursos(incluidos a travez de la red)
// Resultara familiar  a cualquier que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto
// de caracteristicas mas mas potente y flexible.

// El metodo fetch() toma un argumento obligatorio la ruta de acceso, devuelve una promise que resuelve en Response a esa peticion, sea o no
// sea correcta

// Una vez que response sea recupera hay varios metodos disponibles para definir cual es el contenido del cuerpo y como se debe manejar

const url = "https://jsonplaceholder.typicode.com/posts/1";
const urlDinamica = "https://jsonplaceholder.typicode.com/posts/";
// fetch(url)
//   .then(res => console.log(res));

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(e => console.log(e))
  .finally(() => console.log('finalizo'))


const findPost = async(id) => {
  try{    
    const res = await fetch(urlDinamica + id)
    const data = await res.json();
    console.log(data);
  } catch(error) {
    console.log(error)
  }
};

findPost(50);





