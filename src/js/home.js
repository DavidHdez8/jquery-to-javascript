console.log('hola mundo!');
const noCambia = "David";

let cambia = "@DavidHdez8";

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre;
}

const promises = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve("Promise resolved");
  }, 5000);
});

const getUsers = new Promise(function(resolve, reject){
  setTimeout(function(){
    reject();
  },2000)
})

promises
  .then(function(msg){
    console.log(msg);
  })
  .catch(function(msg){
    console.error(msg);
  })

Promise.all([
  getUsers
])
  .then(function(){
    console.log("Promise Resolved");
  })
  .catch(function(){
    console.error("Reject in promise");
  })

$.ajax('https://randomuser.me/api/', {
  method: 'GET',
  success: function(data){
    console.log(data);
  },
  error: function(error){
    console.log(error);
  }
})  

fetch('https://randomuser.me/api/')
.then(function(response){
  return response.json();
})
.then(function(user) {
  console.log("User ", user.results[0].name.first, user.results[0].name.last);
})
.catch(function(){
  console.log("Algo fallo :(")
});


(async function load (){
  try{
    async function getData(url){
      const response = await fetch(url);
      const data = response.json();
      return data;
  }
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  console.log(actionList);
  }catch(error){
    console.log(error);
}
})()


const myPromise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve();
  }, 5000);
});

myPromise
  .then(function(){
    console.log("All resolved");
  })
  .catch(function(){
    console.error("All reject. Error");
  });

(async function load(){
  async function getData(link){
    const response = await fetch(link);
    const data = response.json();
    console.log(data);
  }

  const list = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  console.log(list)
})()