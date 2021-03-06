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

  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  const $featuringContainer = document.getElementById('featuring');

  function setAttributes($element, attributes){
    for(const attribute in attributes){
      $element.setAttribute(attribute, attributes[attribute]);
    }
  }

  function featuringTemplate(peli){
    return(
      `
      <div class="home-featuring" id="featuring">
      <div class="featuring">
        <div class="featuring-image">
          <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.title}</p>
        </div>
      </div>
    </div>
    `
    );
  }
  const BASE_API = 'https://yts.mx/api/v2/';

  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $home.classList.add('search-active');
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);

    const data = new FormData($form);
    const {
      data: {
        movies: pelis
      }
    } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`); //Peticiones web
    const HTMLString = featuringTemplate(pelis[0]);
    $featuringContainer.innerHTML = HTMLString;
  })
  const actionList = await getData(`${BASE_API}list_movies.json?genre=action`);
  const dramaList = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const animationList = await getData(`${BASE_API}list_movies.json?genre=animation`);
  console.log(actionList, dramaList, animationList);

  function videoItemTemplates (movie, category){
    return(`<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
      <div class="primaryPlaylistItem-image">
        <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
        ${movie.title}
        </h4>
    </div>`
    );
  }
  function createTemplate(HTMLString){
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }

  function addEventClick($element){
    $element.addEventListener('click', () => {
      showModal($element);
    });
  }

  function renderMovieList (list, $container, category) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplates(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      console.log(HTMLString);
      addEventClick(movieElement);
    } 
    )
  }

  const $actionContainer = document.getElementById('action');
  renderMovieList(actionList.data.movies, $actionContainer, 'action');

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer, 'drama');

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer, 'animation');
})()


const $featuringContainer = document.getElementById('#featuring');

const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $hideModal = document.getElementById('hide-modal');

const $modalTitle = $modal.querySelector('h1');
const $modalImage = $modal.querySelector('img');
const $modalDescription = $modal.querySelector('p');

function showModal($element) {
  $overlay.classList.add('active');
  $modal.style.animation = 'modalIn .8s forwards';
  const id = $element.dataset.id;
  const category = $element.dataset.category;
}

$hideModal.addEventListener('click', () => {
  $overlay.classList.remove('active');
  $modal.style.animation = 'modalOut .8s forwards';
});
