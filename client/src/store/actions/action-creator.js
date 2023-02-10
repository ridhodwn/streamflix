import { MOVIES_FETCH_SUCCESS, MOVIE_FETCH_BY_ID_SUCCESS, MOVIE_CASTS_FETCH_SUCCESS, MOVIE_RECOMMENDED_FETCH_SUCCESS, MOVIE_SIMILAR_FETCH_SUCCESS } from "./action-type";

export const moviesFetchSuccess = payload => {
    return {
        type: MOVIES_FETCH_SUCCESS,
        payload
    }
};

export const movieFetchByIdSuccess = payload => {
    return {
        type: MOVIE_FETCH_BY_ID_SUCCESS,
        payload
    }
};

export const movieCastsFetchSuccess = payload => {
    return {
        type: MOVIE_CASTS_FETCH_SUCCESS,
        payload
    }
};

export const movieRecommendedFetchSuccess = payload => {
    return {
        type: MOVIE_RECOMMENDED_FETCH_SUCCESS,
        payload
    }
};

export const movieSimilarFetchSuccess = payload => {
    return {
        type: MOVIE_SIMILAR_FETCH_SUCCESS,
        payload
    }
};

export const fetchMovies = (currentPage) => {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=76fcc3e7be4c0be402102a1ffda62869&language=en-US&page=${currentPage}&region=ID`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
            dispatch(moviesFetchSuccess(data));
        });
    };
};

export const fetchMovieById = (id) => {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=76fcc3e7be4c0be402102a1ffda62869&language=en-US`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            dispatch(movieFetchByIdSuccess(data));
        });
    };
};

export const fetchMovieCasts = (id) => {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=76fcc3e7be4c0be402102a1ffda62869&language=en-US`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            data = data.cast.filter((item) => item.known_for_department === 'Acting');
            dispatch(movieCastsFetchSuccess(data));
        });
    };
};

export const fetchMovieRecommended = (id) => {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=76fcc3e7be4c0be402102a1ffda62869&language=en-US&page=1`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            dispatch(movieRecommendedFetchSuccess(data));
        });
    };
};

export const fetchMovieSimilar = (id) => {
    return (dispatch) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=76fcc3e7be4c0be402102a1ffda62869&language=en-US&page=1`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            dispatch(movieSimilarFetchSuccess(data));
        });
    };
};