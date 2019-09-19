const omdbApi = {
  API_KEY: '30ed262d',
  BASE_URL: 'http://www.omdbapi.com/?apikey='
};

export default omdbApi;

//  URL FOR LIST OF MOVIES
export const MovieListUrl = omdbApi.BASE_URL + omdbApi.API_KEY + '&' + 's=';

// URL FOR SINGLE MOVIE DETAILS
export const MovieDetailUrl = omdbApi.BASE_URL + omdbApi.API_KEY + '&' + 'i=';

