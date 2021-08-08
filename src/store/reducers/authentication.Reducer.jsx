import { authenticationConstant } from "../constants";

const initialState = {
  isLoggedIn: false,
  user: {},
  error: "",
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationConstant.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: initialState.error,
      };

    case authenticationConstant.AUTHENTICATION_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: initialState.user,
        error: action.error,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
