import { MOVIES_FETCH_SUCCESS, MOVIE_FETCH_BY_ID_SUCCESS, MOVIE_CASTS_FETCH_SUCCESS, MOVIE_RECOMMENDED_FETCH_SUCCESS, MOVIE_SIMILAR_FETCH_SUCCESS } from "../actions/action-type";

const intialState = {
    movies: [],
    movie: {},
    casts: [],
    recommended: [],
    similar: []
};

export default function rootReducer(state = intialState, action) {
    switch (action.type) {
        case MOVIES_FETCH_SUCCESS:
            return {
                ...state,
                movies: action.payload
            };
        case MOVIE_FETCH_BY_ID_SUCCESS:
            return {
                ...state,
                movie: action.payload
            };
        case MOVIE_CASTS_FETCH_SUCCESS:
            return {
                ...state,
                casts: action.payload
            };
        case MOVIE_RECOMMENDED_FETCH_SUCCESS:
            return {
                ...state,
                recommended: action.payload
            };
        case MOVIE_SIMILAR_FETCH_SUCCESS:
            return {
                ...state,
                similar: action.payload
            };
        default:
            return state;
    }
};