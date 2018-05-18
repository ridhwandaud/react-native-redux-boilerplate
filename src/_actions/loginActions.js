import firebase from 'firebase';
import { 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS
} from './types';

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    console.log('email', email);
    console.log('password', password);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error)=>{
        console.log('login failed', error);
        dispatch({ type: LOGIN_USER_FAIL })
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const signupUser = (email,password,fullname) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    console.log('email', email);
    console.log('password', password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error)=>{
        console.log('login failed', error.message);
        dispatch({ type: LOGIN_USER_FAIL })
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
  };
};

