// common
export const HTTPS = 'https://';
export const HTTP = 'http://';

// SWAPI
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?search=';

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

// Visual Guide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';

export const URL_IMG_PERSON = GUIDE_ROOT_IMG+GUIDE_PEOPLE;

//Searching
export const API_SEARCH = API_PERSON + SWAPI_PARAM_SEARCH




// films: (6) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/']

// homeworld: "https://swapi.dev/api/planets/1/"
