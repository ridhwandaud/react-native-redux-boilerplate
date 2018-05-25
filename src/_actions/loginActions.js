import firebase from 'firebase';
import types from './types';

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const loginUser = ({ email, password }, callback, callbackError) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
        callback && callback();
      })
      .catch((error)=>{
        dispatch({ type: types.LOGIN_USER_FAIL });
        callbackError && callbackError();
      });
  };
};

export const signupUser = (email,password,fullname) => {
  return (dispatch) => {
    dispatch({ type: types.SIGNUP_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error)=>{
        dispatch({ type: types.LOGIN_USER_FAIL })
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: types.LOGOUT_USER });
  };
};

