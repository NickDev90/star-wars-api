import { GUIDE_IMG_EXTENSION, HTTPS, SWAPI_PEOPLE, 
        SWAPI_ROOT, URL_IMG_PERSON, SWAPI_PARAM_PAGE } from "@constants/api";

/**
 * Cuts current page number from url
 * @param {String} url - current page url
 * @returns {Number} - current page number
 */
export const getPeoplePageId  = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length);

    return Number(id);
}


const getID = (url, category) => {
    const id = url.replace(HTTPS+SWAPI_ROOT+category, '')
                    .replace(/\//g, '');
    return id;
}

export const getPeopleId = (url) => getID(url, SWAPI_PEOPLE);

export const getPeopleImage  = (id) => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`


// ./assets/img/characters/10.jpg