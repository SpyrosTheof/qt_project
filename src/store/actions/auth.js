import * as actionTypes from './actionTypes';

export const authorizeUser = (bool) => {
  return {
    type: actionTypes.AUTHORIZE_USER,
    payload: bool,
  };
};
export const setWrongEmail = (bool) => {
  return {
    type: actionTypes.SET_WRONG_EMAIL,
    payload: bool,
  };
};
export const setWrongPassword = (bool) => {
  return {
    type: actionTypes.SET_WRONG_PASSWORD,
    payload: bool,
  };
};
