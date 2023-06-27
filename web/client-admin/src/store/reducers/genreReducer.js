import {
  GENRES_ADD_SUCCESS,
  GENRES_DELETE_SUCCESS,
  GENRES_EDIT_SUCCESS,
  GENRES_FETCH_SUCCESS,
  GENRE_ID_SUCCESS,
} from "../actions/actionType";

const initialState = {
  genres: [],
  genre: {},
  msg: {},
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GENRES_FETCH_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case GENRES_DELETE_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    case GENRES_ADD_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    case GENRES_EDIT_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    case GENRE_ID_SUCCESS:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
}
