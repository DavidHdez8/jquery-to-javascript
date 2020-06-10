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

(async function load(){
  async function getData(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList);

  function videoItemTemplates (movie){
    return(`<div class="primaryPlaylistItem">
      <div class="primaryPlaylistItem-image">
        <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
        ${movie.title}
        </h4>
    </div>`
    );
  }
  const $actionContainer = document.querySelector('#action');
  debugger
  actionList.data.movies.forEach((movie) => {
    const HTMLString = videoItemTemplates(movie);
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    $actionContainer.append(html.body.children[0]);
    console.log(HTMLString);
  });
})()

const $dramaContainer = document.getElementById('#drama');
const $animationContainer = document.getElementById('#action');

const $featuringContainer = document.getElementById('#featuring');
const $form = document.getElementById('#form');
const $home = document.getElementById('#home');

const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $hideModal = document.getElementById('hide-modal');

const $modalTitle = $modal.querySelector('h1');
const $modalImage = $modal.querySelector('img');
const $modalDescription = $modal.querySelector('p');

console.log(videoItemTemplates('src/images/covers/bitcoinjpg', 'Bitcoin'));