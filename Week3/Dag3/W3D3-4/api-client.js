// API_KEY altijd met hoofdletters schrijven.
// Code die verantwoordelijk ik voor het ophalen van data van de API in een aparte file zetten.

const API_KEY = inPrivateRepository;

// // dit is de algemene basisversie van de API getData functie
// const getData = async function() {
//   try {
//     const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
//     const res = await fetch(apiUrl, { method: 'GET' });
//     console.log('The response from the API in getData function ', res);
//     const data = await res.json();
//     console.log('the data in getData function', data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// MovieGenres ophalen
const getMovieGenres = async function() {
  try {
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const res = await fetch(genreUrl, { method: 'GET' });
    const result = await res.json();
    console.log('the genres in getMovieGenres function', result.genres);
    return result.genres;
  } catch (error) {
    console.log(error);
  }
};

// specifieke film ophalen obv ID
const external_id = 'tt0068646';
const external_source = 'imdb_id';

const getMovie = async function() {
  try {
    const movieUrl = `https://api.themoviedb.org/3/find/${external_id}?api_key=${API_KEY}&external_source=${external_source}`;
    const result = await fetch(movieUrl, { method: 'GET' });
    const data = await result.json();
    console.log('the data: ', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

getMovie();

// toplijst films ophalen
const getTopratedMovies = async function() {
  try {
    const topratedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const result = await fetch(topratedUrl, { method: 'GET' });
    const data = await result.json();
    console.log('the data: ', data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

getTopratedMovies();

// Films uit 1975

const getMovies1975 = async function() {
  try {
    const url1975 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=1975&sort_by=popularity.desc&page=1`;
    const result = await fetch(url1975, { method: 'GET' });
    const data = await result.json();
    console.log('the data: ', data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

getMovies1975();
