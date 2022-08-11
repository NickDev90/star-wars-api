import { HTTP, HTTPS } from "@constants/api";

/**
 * Changes url on 'HTTPS'
 * @param {String} url - url with 'HTTP', that must be changed to 'HTTPS'
 * @returns {String} changed url
 */
export const changeHTTP  = (url) => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * Sends Fetch request for getting data
 * @param {String} url - url for request
 * @returns {Promise} - Promise with results
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        if(!res.ok) {
            console.error('Could not fetch, ', res.status);
            return false
        }
        return await res.json();  
    } catch (error) {
        console.log(error.message);
        return false;
    }
     

}
