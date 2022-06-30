// is-valid

const form = document.querySelector('#formulario');
const userEmail = document.querySelector("input[name='userEmail']");
const userName = document.querySelector("input[name='userName'");

const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regExpUser = /^[a-zA-Z ]*$/;

const check = document.querySelector('#check');
const checkTemplate = document.querySelector('#checkTemplate');

form.addEventListener('submit', e => {
  check.textContent = '';
 
  // Esto devuelve true si existe solo espacios
  // console.log(userName.value.trim())

  e.preventDefault();
  // console.log('enviado');
  // console.log(userName.value);
  // console.log(userEmail.value);

  if(!regExpUser.test(userName.value) || !userName.value.trim()){
    userName.className = 'form-control is-invalid';
    // console.log('falso');
  } else {  
  userName.className = 'form-control is-valid';
  }
  if(!regExpEmail.test(userEmail.value)){
    // console.log('email invalido');
    userEmail.className = 'form-control is-invalid';
    return;
  } else {
    userEmail.className = 'form-control is-valid';
  }
  printMessageExit();
});


const printMessageExit = () => {

  if(regExpEmail.test(userEmail.value) && regExpUser.test(userName.value) && userName.value.trim() && userEmail.value.trim()) {
    const clone = checkTemplate.content.firstElementChild.cloneNode(true);
    check.appendChild(clone);
  }

}
