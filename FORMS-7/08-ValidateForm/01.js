// Validacion de Formularios

const form = document.querySelector('#formulario');
// const userName = document.querySelector('#userName');
// const userEmail = document.querySelector('#userEmail');
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

const expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const expRegUserName =  /^[a-zA-Z ]*$/;

form.addEventListener('submit' , e => {
  e.preventDefault() // detiene lo que se hace el navegador por defecto y evita que los datos sean mandados por la url

  // console.log(userName.value); // consola: flavio
  // console.log(userEmail.value); // consola: alvarado@gmail.com

  // console.log(expRegEmail.test(userEmail.value));
  if(!expRegEmail.test(userEmail.value)){
    console.log('formato no valido');
    return; // se sale de todo el addEventListener, Y NO PROCESA LO QUE ESTA DEBAJO DE ESTA IF
  };
  if(!expRegUserName.test(userName.value)){
    console.log('nombre no valido');
    return;
  };

  console.log('formulario enviado con exito');

});

