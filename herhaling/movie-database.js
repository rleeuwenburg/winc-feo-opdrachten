let movieFav = {
  title: 'Puff te magic Dragon',
  duration: 30,
  stars: ['Puff', 'Jackie', 'Living Sneezes']
};

//console.log(movieFav);

let moviePrint = function(movie) {
  let message =
    movieFav.title +
    'lasts for ' +
    movieFav.duration +
    ' minutes and Stars: ' +
    movieFav.stars.join(', ');
  console.log(message);
};

moviePrint(movieFav);
