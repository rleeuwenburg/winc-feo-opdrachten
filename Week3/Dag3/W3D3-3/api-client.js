// API_KEY altijd met hoofdletters schrijven.
// Code die verantwoordelijk ik voor het ophalen van data van de API in een aparte file zetten.

const API_KEY = inPrivateRepository;

const getData = async function() {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const res = await fetch(apiUrl, { method: 'GET' });
    console.log('The response from the API in getData function ', res);
    const data = await res.json();
    console.log('the data in getData function', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
