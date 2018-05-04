import firebase from 'firebase';
import { 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS
} from './types';

export const loginUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    // console.log('email', email);
    // console.log('password', password);
    // setTimeout(() => {
    //   if(email == 'demo'&& password == 'password'){
    //   dispatch({ type: LOGIN_USER_SUCCESS });
    // }else {
    //   dispatch({ type: LOGIN_USER_FAIL });
    // }, 1500);

    //firebase.auth().signInWithEmailAndPassword(email, password)
      //.then(user => loginUserSuccess(dispatch, user))

   setTimeout(() => {
    dispatch({ type: LOGIN_USER_SUCCESS });
    }, 2000)

    // if(email == 'Demo@example.com'&& password == 'password'){
    //   dispatch({ type: LOGIN_USER_SUCCESS });
    // }else {
    //   dispatch({ type: LOGIN_USER_FAIL });
    // }
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const signupUser = (email,passsword,fullname) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });

    // setTimeout(() => {
    //   if(email == 'demo'&& password == 'password'){
    //   dispatch({ type: LOGIN_USER_SUCCESS });
    // }else {
    //   dispatch({ type: LOGIN_USER_FAIL });
    // }, 1500);

   setTimeout(() => {
    dispatch({ type: SIGNUP_USER_SUCCESS });
    }, 2000)

    // if(email == 'Demo@example.com'&& password == 'password'){
    //   dispatch({ type: LOGIN_USER_SUCCESS });
    // }else {
    //   dispatch({ type: LOGIN_USER_FAIL });
    // }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });

   // setTimeout(() => {
   //  dispatch({ type: LOGOUT_USER_FAIL });
   //  }, 2000)
  };
};

