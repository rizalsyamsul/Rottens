// export const moviesFecthSuccess = (payload) =>{

import { MOVIES_FETCH_SUCCESS, MOVIE_FETCH_DETAIL } from "./actionType";

export function moviesFetchSuccess(payload) {
  return {
    type: MOVIES_FETCH_SUCCESS,
    payload: payload,
  };
}
export function moviesFetchDetail(payload) {
  return {
    type: MOVIE_FETCH_DETAIL,
    payload: payload,
  };
}
const baseUrl = "https://rottens.rizalsyamsul.site";
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const url = baseUrl + "/user/movies";
      let response = await fetch(url);
      let newData = await response.json();

      dispatch(moviesFetchSuccess(newData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMoviesDetail = (id) => {
  return async (dispatch) => {
    try {
      const url = baseUrl + `/user/movies/${id}`;
      let response = await fetch(url);
      let newData = await response.json();

      dispatch(moviesFetchDetail(newData));
    } catch (error) {
      console.log(error);
    }
  };
};
