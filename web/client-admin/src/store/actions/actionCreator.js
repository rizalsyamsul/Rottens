import {
  GENRES_ADD_SUCCESS,
  GENRES_DELETE_SUCCESS,
  GENRES_EDIT_SUCCESS,
  GENRES_FETCH_SUCCESS,
  GENRE_ID_SUCCESS,
  MOVIES_DELETE_SUCCESS,
  MOVIES_EDIT_SUCCESS,
  MOVIES_FETCH_SUCCESS,
  MOVIE_ADD_SUCCESS,
  MOVIE_FETCH_DETAIL,
  USER_ADDADMIN_SUCCESS,
} from "./actionType";
const baseUrl = "https://rottens.rizalsyamsul.site";

//login

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok)
        throw { status: response.status, name: response.statusText };
      const newData = await response.json();
      localStorage.access_token = newData.access_token;
    } catch (error) {
      Swal.fire({
        title: `Error - ${error.status}`,
        text: error.name,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

//genre
export const fetchGenreSuccess = (payload) => {
  return {
    type: GENRES_FETCH_SUCCESS,
    payload: payload,
  };
};

export const fetchGenre = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/genres`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const newData = await response.json();
      dispatch(fetchGenreSuccess(newData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteGenreSuccess = (payload) => {
  return {
    type: GENRES_DELETE_SUCCESS,
    payload: payload,
  };
};

export const deleteGenre = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/genres/${id}`, {
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!response.ok) throw new Error("something went wrong");
      dispatch(deleteGenreSuccess({ msg: `genre with id ${id} deleted` }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addGenreSuccess = (payload) => {
  return {
    type: GENRES_ADD_SUCCESS,
    payload: payload,
  };
};

export const addGenre = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/genres", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("something went wrong");
      dispatch(addGenreSuccess({ msg: `new genre added` }));
      dispatch(fetchGenre());
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGenreByIdSuccess = (payload) => {
  return {
    type: GENRE_ID_SUCCESS,
    payload: payload,
  };
};

export const fetchGenreById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/genres/${id}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!response.ok) throw new Error("something went wrong");
      const newData = await response.json();
      dispatch(fetchGenreByIdSuccess(newData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editGenreSuccess = (payload) => {
  return {
    type: GENRES_EDIT_SUCCESS,
    payload: payload,
  };
};

export const editGenre = (data, id) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const response = await fetch(baseUrl + `/genres/${id}`, {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("something went wrong");
      dispatch(editGenreSuccess({ msg: `genre edited` }));

      dispatch(fetchGenre());
    } catch (error) {
      console.log(error);
    }
  };
};

//User

export const addAdminSuccess = (payload) => {
  return {
    type: USER_ADDADMIN_SUCCESS,
    payload: payload,
  };
};

export const addAdmin = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/register", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("something went wrong");
      dispatch(addAdminSuccess({ msg: `new admin added` }));
    } catch (error) {
      console.log(error);
    }
  };
};

//movie

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

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const url = baseUrl + "/movies";
      let response = await fetch(url, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
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
      const url = baseUrl + `/movies/${id}`;
      let response = await fetch(url, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      let newData = await response.json();

      dispatch(moviesFetchDetail(newData));
      dispatch(fetchGenre());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMovieSuccess = (payload) => {
  return {
    type: MOVIES_DELETE_SUCCESS,
    payload: payload,
  };
};

export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/movies/${id}`, {
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!response.ok) throw new Error("something went wrong");
      dispatch(deleteMovieSuccess({ msg: `Movie with id ${id} deleted` }));
      dispatch(fetchMovies());
    } catch (error) {
      console.log(error);
    }
  };
};

export const addMovieSuccess = (payload) => {
  return {
    type: MOVIE_ADD_SUCCESS,
    payload: payload,
  };
};

export const addMovie = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/movies", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("something went wrong");
      dispatch(addMovieSuccess({ msg: `new movie added` }));
      dispatch(fetchMovies());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editMovieSuccess = (payload) => {
  return {
    type: MOVIES_EDIT_SUCCESS,
    payload: payload,
  };
};

export const editMovie = (data, id) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const response = await fetch(baseUrl + `/movies/${id}`, {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("something went wrong");

      dispatch(fetchMovies());
    } catch (error) {
      console.log(error);
    }
  };
};
