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
// const createList = function() {
//   const wrapper = document.createElement('div');
//   document.body.appendChild(wrapper);
//   const list = document.createElement('ul')
//   // ul moet een ID krijgen
// };

// // createList();

// // Lijst even met de hand in html gezet

// // Moviegenres in html lijst zetten
const addMovieGenresToList = async function() {
  const listMovieGenres = document.getElementById('listMovieGenres');
  const movieGenres = await getMovieGenres();

  movieGenres.forEach(movieGenre => {
    const li = document.createElement('li');
    const liMovieGenre = document.createTextNode(
      `genre: ${movieGenre.name}, id: ${movieGenre.id}`
    );

    li.appendChild(liMovieGenre);
    listMovieGenres.appendChild(li);
  });
};

addMovieGenresToList();

/* 
W3D3-4: Deel 1, vraag2
X Zoek film ID in documentatie van API
/find/{external_id}
external_id = imdb id
Lion King = tt6105098

X Gebruik Postman om get request te maken
 x Juiste URL met endpoint (ID)
 x HTTP functie GET
 x API_KEY
 x wat staat er nog meer in documentatie?
X Doe dit nog 2x voor andere films
X <h1> maken in html
X filmtitel toevoegen
  x Maak API request in JS met juiste film id 
X Maak functie om titel onder h1 te plaatsen
    x Selecteer h1 met getElementById
    x maak een <li>, uiteindelijk <p> gedaan, want 1 film is geen lijst
    x vul <li> met favoriete titel, hoe? zie hieronder
    x hang <li> onder <h1>
X hoe krijg ik mijn data?
 array, object, array
X hoe kan ik die gebruiken?
movie.movie_results[0].title
X innerHTML van element gebruiken om waarde (titel) in te voegen. Gedaan met textnode

- door naar volgende vraag
 */

const addMovieToFavorite = async function() {
  const headerFavorite = document.getElementById('my-favorite-movie');
  const movie = await getMovie();
  const favMovieTitle = movie.movie_results[0].title;
  const pElement = document.createElement('p');
  pElement.style.fontSize = '20px';
  const pFavoriteMovie = document.createTextNode(
    `My favorite movie is: ${favMovieTitle}`
  );

  pElement.appendChild(pFavoriteMovie);
  headerFavorite.appendChild(pElement);
};

addMovieToFavorite();

/*
W3D3-4: Deel 1, vraag 3
X Zoek toplijst in documentatie van API
/movie/top_rated

X h1 en ul maken in html met id="top-rated"
X Maak API request in JS met juiste path in url
X Maak functie om li's in lijst te plaatsen
    x maak koppeling met API request mbv async/await
    x Van top20 top 10 maken met slice
    x Selecteer ul met getElementById
    x maak een <li>
    x vul <li> met titel mbv textnode
    x hang <li> onder <ul>
    x herhalen met forEach (dus moet zorgen dat ik werk in array)
X hoe krijg ik mijn data?
 array met objecten
X hoe kan ik die gebruiken?
met forEach

- door naar volgende vraag, maar eerst eten
 */

const addTopTenMoviesToList = async function() {
  const topratedMoviesData = await getTopratedMovies();
  console.log(topratedMoviesData);
  const filterEnglishMovies = topratedMoviesData.filter(
    array => array.original_language === 'en'
  );

  const topratedList = document.getElementById('toprated-movies');
  const makeTop10Movies = filterEnglishMovies.slice(0, 10);

  makeTop10Movies.forEach(movie => {
    const li = document.createElement('li');
    const liToprated = document.createTextNode(movie.original_title);
    li.appendChild(liToprated);
    topratedList.appendChild(li);
  });
};

addTopTenMoviesToList();

const add1975MoviesToList = async function() {
  const movies1975Data = await getMovies1975();
  console.log(movies1975Data);
  const filterEnglishMovies = movies1975Data.filter(
    array => array.original_language === 'en'
  );

  const list1975 = document.getElementById('movies1975-list');
  const makeTop10Movies1975 = filterEnglishMovies.slice(0, 10);

  makeTop10Movies1975.forEach(movie => {
    const li = document.createElement('li');
    const liToprated = document.createTextNode(movie.original_title);
    li.appendChild(liToprated);
    list1975.appendChild(li);
  });
};

add1975MoviesToList();
