import { USER_ADDADMIN_SUCCESS } from "../actions/actionType";

const initialState = {
  user: {},
  msg: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ADDADMIN_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
}
