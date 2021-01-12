import * as actionTypes from '../actions/actionTypes';
import updateReducerState from '../../utility/updateReducerState';

const initialState = {
  auth: false,
  wrongEmail: false,
  wrongPassword: false,
};

const authorizeUser = (state, action) => {
  return updateReducerState(state, { auth: action.payload });
};
const setWrongEmail = (state, action) => {
  return updateReducerState(state, { wrongEmail: action.payload });
};

const setWrongPassword = (state, action) => {
  return updateReducerState(state, { wrongPassword: action.payload });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZE_USER:
      return authorizeUser(state, action);
    case actionTypes.SET_WRONG_EMAIL:
      return setWrongEmail(state, action);
    case actionTypes.SET_WRONG_PASSWORD:
      return setWrongPassword(state, action);
    default:
      return state;
  }
};

export default authReducer;
