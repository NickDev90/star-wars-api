import { GUIDE_IMG_EXTENSION, HTTPS, SWAPI_PEOPLE, 
        SWAPI_ROOT, URL_IMG_PERSON } 
from "../constants/api"

const getID = (url, category) => {
    const id = url.replace(HTTPS+SWAPI_ROOT+category, '')
                    .replace(/\//g, '');
    return id;
}

export const getPeopleId = (url) => getID(url, SWAPI_PEOPLE);

export const getPeopleImage  = (id) => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`


// ./assets/img/characters/10.jpg