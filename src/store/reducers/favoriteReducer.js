import {omit} from 'lodash';
import { getLocalStorage } from '../../utils/localStorage';
import { SET_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes";

const initialState = getLocalStorage('store');

export const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PERSON_TO_FAVORITE: 

            return {
                ...state,
                ...action.payload
            } 

        case REMOVE_PERSON_FROM_FAVORITE: 

            return omit(state, [action.payload]);
                // ...state.filter(Object.keys())
                // ...action.payload
            

        default: return state;
    }
        
}