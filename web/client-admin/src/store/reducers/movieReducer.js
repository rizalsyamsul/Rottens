import {
  MOVIES_DELETE_SUCCESS,
  MOVIES_FETCH_SUCCESS,
  MOVIE_FETCH_DETAIL,
  MOVIE_ADD_SUCCESS,
  MOVIES_EDIT_SUCCESS,
} from "../actions/actionType";

const initialState = {
  movies: [],
  movie: {},
  msg: {},
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case MOVIE_FETCH_DETAIL:
      return {
        ...state,
        movie: action.payload,
      };
    case MOVIES_DELETE_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    case MOVIE_ADD_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    case MOVIES_EDIT_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
}
