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