
const posts = [
  {
    'userId': 1,
    'id': 1,
    'title': 'Amet enim dolores.',
    'body': 'Ipsum repudiandae quibusdam deleniti tempore ipsam Voluptatem eligendi cum at molestiae sed Sit odit voluptates nemo ea corrupti Molestiae deserunt cum quis magni expedita? Voluptates deserunt optio culpa velit animi3'
  },
  {
    'userId': 1,
    'id': 2,
    'title': 'Amet enim dolores.',
    'body': 'Ipsum repudiandae quibusdam deleniti tempore ipsam Voluptatem eligendi cum at molestiae sed Sit odit voluptates nemo ea corrupti Molestiae deserunt cum quis magni expedita? Voluptates deserunt optio culpa velit animi3'
  },

  {
    'userId': 1,
    'id': 3,
    'title': 'Amet enim dolores.',
    'body': 'Ipsum repudiandae quibusdam deleniti tempore ipsam Voluptatem eligendi cum at molestiae sed Sit odit voluptates nemo ea corrupti Molestiae deserunt cum quis magni expedita? Voluptates deserunt optio culpa velit animi3'
  }
]
// Con una promesa nuestro codigo empieza a ser asyncrono osea que se puede ejecutar de forma paralela a algo que va
// a estar esperando la promesa mientras nosotros seguimos haciendo los nuestro

/// async la declaracion de la funcion async define una funcion asincrona, la cual devuelve una funcion AsyncFunction
/// await el operador await es usado para para esperar una promise. Solo puede ser usado dentro de una funcion async function

const findPostId = (id) =>
    new Promise((resolve, reject) => {

      setTimeout(()=> {
        const post = posts.find(item => item.id === id);
        if(post){
          resolve(post);
        } else {
          reject('no se encontro id');
        };
      }, 2000)
    });

// Con una promesa nuestro codigo empieza a ser asyncrono osea que se puede ejecutar de forma paralela a algo que va
// a estar esperando la promesa mientras nosotros seguimos haciendo los nuestro

const buscar = async(id) =>  {
  const post = await findPostId(id);
  console.log(post);
};

buscar(2)


const findId = id => new Promise((resolve, reject) => {
  const post = posts.find(item => item.id === id);
  setTimeout(()=> {
    if(post){
      resolve(post)
    } else {
      reject('error')
    }
  }, 3000)
});


const search = async(id) => {
  try {
    const post = await findId(id);
    console.log(post);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('se ejecuta si o si');
  }
};

search(3);

console.log('fin del codigo')

////////////////////////

const buscarId = id => new Promise((resolve, reject) => {
  const post = posts.find(item => item.id == id);
  setTimeout(()=>{
    if(post){
      resolve(post);
    } else {
      reject('error');
    }
  }, 4000)
});

const searchPosTitle = async() => {
  try {
  const titleAlls = await Promise.all([buscarId(1), buscarId(2)])
  console.log(titleAlls[0].title, titleAlls[1].title);
  } catch (error) {
    console.log(error)
  }
};

searchPosTitle()
