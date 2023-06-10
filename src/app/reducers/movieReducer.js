import { ActionsTypes } from "../ActionTypes";
const initialState = {
    populerFilms: [],
    loading: false,
    genres: [],
}


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.SET_MOVİES:
            return {
                ...state, populerFilms: action.payload,

            };
        case ActionsTypes.SET_GENRES:
            return {
                ...state,
                genres: action.payload,

            };

        default:
            return state
    }



}