import { REMOVE_PERSON_FROM_FAVORITE, SET_PERSON_TO_FAVORITE } from "../constants/actionTypes"

export const setFavorite  = (person) => {
    return {
        type: SET_PERSON_TO_FAVORITE,
        payload: person
    }
}

export const removeFavorite  = (id) => {
    return {
        type: REMOVE_PERSON_FROM_FAVORITE,
        payload: id
    }
}