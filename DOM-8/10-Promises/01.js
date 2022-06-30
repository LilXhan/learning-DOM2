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

/// Promesas

// una promise (promesa en castellano) es un objeto que representa la terminacion o el fracaso de una operacion asincrona

const findPostId = (id) => {
  const post = posts.find(item => item.id === id);

  // resolve: respuesta satisfactoria
  // reject: respuesta negativ // resolve: respuesta satisfactoria
  // reject: respuesta negativaa

  return new Promise((resolve, reject) => {
    if(post){
      resolve(post);
    } else {
      reject('no se encontro id');
    };
  });
};

findPostId(20)
  .then(post => console.log(post)) // resolve
  .catch(e => console.log(e)) // reject


// Tambien se puede de la siguiente forma

const findPost = id => new Promise((resolve, reject)=>{
  const post = posts.find(item => item.id === id)
  if(post){
    resolve(post)
  } else {
    reject('error')
  };
});

findPost(10)
  .then(post => console.log(post))
  .catch(err => console.log(err))

/////////////////////////////////////
const findPostInfinity = id => new Promise((resolve, reject) =>{
  const findindex = posts.find(item => item.id === id)
  if(findindex){
    resolve(findindex)
  } else {
    reject('error')
  };
});

findPostInfinity(1)
  .then(findindex =>{
    console.log(findindex);
    return findPostInfinity(2);
  })
  .then(findindex =>{
    console.log(findindex)
    return findPostInfinity(3)
  })
  .then(findindex =>  {
    console.log(findindex)
    return findPostInfinity(4)
  })
  .catch(err => console.log(err))

