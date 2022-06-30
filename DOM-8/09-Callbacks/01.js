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

/// Callbacks

// Callback es una funcion que se pasa como argumento a otra funcion

const buscarPostTwo = (id, call) => {

  const post = posts.find(item => item.id === id);

  if(post){
    call(null, post);
  } else {
    // err
    console.log('no se encontrodsadasasd');
  };
};

buscarPostTwo(10, (err, post) => {
  if(err) return console.log(err);
  console.log(post);
});

const buscarPost = (id, callback) => {
  const post = posts.find(item => item.id === id)
  if(post) {
    callback(null, post);
  } else{
    // err
    callback('no se encontro el post');
  };
};

buscarPost(4, (err, post) => {
  if(err){
    return console.log(err);
    }
  console.log(post);
});


