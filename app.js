'use strict';

let imageArray = ['action.png', 'adventure.png', 'animation.png', 'comedy.png', 'detective.png',
  'fantasy.png', 'history.png', 'horror.png', 'musical.png', 'pirate.png', 'romantic.png', 'sci-fi.png', 'war.png', 'western.png'];

let movieForm = document.getElementById('movieForm');
let movieTable = document.getElementById('movieTable');

if (localStorage.movies == null) {
  localStorage.movies = '[]';
}

let LSMovies = JSON.parse(localStorage.getItem('movies'));

function Movie(movieName, movieImage, movieRelease) {
  this.movieName = movieName;
  this.movieImage = movieImage;
  this.movieRelease = movieRelease;
  LSMovies.push(this);
}

Movie.prototype.render = function () {

  for (let i = 0; i < LSMovies.length; i++) {
    let trElement = document.createElement('tr');
    movieTable.appendChild(trElement);

    let tdElement = document.createElement('td');
    tdElement.textContent = 'X';
    trElement.appendChild(tdElement);

    let tdImage = document.createElement('td');
    trElement.appendChild(tdImage);

    let imgElement = document.createElement('img');
    imgElement.src = './img/' + LSMovies[i].movieImage + '.png';
    tdImage.appendChild(imgElement);

    let tdMovieName = document.createElement('td');
    tdMovieName.textContent = LSMovies[i].movieName;
    trElement.appendChild(tdMovieName);

    let tdMovieRelease = document.createElement('td');
    tdMovieRelease.textContent = LSMovies[i].movieRelease;
    trElement.appendChild(tdMovieRelease);
  }
};

getMovieData();

for (let i = 0; i < LSMovies.length; i++) {

  new Movie(LSMovies[i].movieName, LSMovies[i].movieImage, LSMovies[i].movieRelease).render();
}

movieForm.addEventListener('submit', movieHandler);

function movieHandler(event) {
  event.preventDefault();
  let newMovieName = document.getElementById('movieName').value;
  let newMovieRelease = document.getElementById('movieYear').value;
  let newImagePath = document.getElementById('movieImage').value;


  let newMovie = new Movie(newMovieName, newImagePath.toLowerCase(), newMovieRelease);
  newMovie.render();
}

function getMovieData() {
  let oldLsData = JSON.parse(localStorage.movies);
  let newData = [];
  newData.push(oldLsData);
}


function clearLS(){
  localStorage.clear();
  location.reload();
}
