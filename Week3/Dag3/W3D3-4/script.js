// // Dit is de algemene functie om het binnenhalen van je dat a aan te roepen
// const doWork = async function() {
//   const data = await getData();
//   console.log('here is your data to do something:', data);
// };

// doWork();

// Aandachtspunten:
// Maak aparte functies voor het ophalen van je data. Bijvoorbeeld: getMovieGenres() getTopRatedMovies(), getTopRatedActionMovies().
// Bedenk of deze functies synchroon óf asynchroon moeten zijn.
// Ook in de functiebenaming zet je altijd de REST methode (GET PUT POST DELETE).
// Bijvoorbeeld: Als ik een rating van een movie zou willen posten naar TheMovieDB dat zou ik daar de functie postMovieRating() van maken.

const workWithMovieGenres = async function() {
  const movieGenres = await getMovieGenres();
  console.log('here is your data to do something:', movieGenres);
};

workWithMovieGenres();

const createList = function() {
  const wrapper = document.createElement('div', (id = 'wrapper'));
  document.body.appendChild(wrapper);
  const list = document.createElement('ul', (id = 'listMovieGenres'));
  wrapper.appendChild(list);
};

createList();

const addMovieGenresToList = function() {
  movieGenres.forEach(movieGenre => {
    const listItemMovieGenre = document.createElement('li');
    const listMovieGenres = document.getElementById('listMovieGenres');
    listMovieGenres.appendChild(listItemMovieGenre);
    listItemMovieGenre.innerHTML; // Genre en Id toevoegen
  });
};

addMovieGenresToList();
