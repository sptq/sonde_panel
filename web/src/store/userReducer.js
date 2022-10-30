import {createAction, handleActions} from "redux-actions";

export const AUTH_USER = "AUTH_USER";
export const SET_AUTH_STATUS = "SET_AUTH_STATUS";
export const LOGOUT = "LOGOUT";

export const authAction = createAction(AUTH_USER);
export const setAuthStatus = createAction(SET_AUTH_STATUS);
export const logout = createAction(LOGOUT);

const defaultState = {
  isLogged: false,
  token: null,
}

export default handleActions({
  [AUTH_USER]: (state, action) => {
    return {...state, isLogged: true, token: action.payload}
  },
  [SET_AUTH_STATUS]: (state, action) => {
    return {...state, isLogged: action.payload}
  },
  [LOGOUT]: (state) => {
    return {...state, isLogged: false, token: null}
  }
}, defaultState);