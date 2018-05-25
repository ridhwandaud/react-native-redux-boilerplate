import types  from '../_actions/types';
import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = { 
	loading: false,
	isLoggedIn: false,
	user: null,
	loggedInError: false,
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.LOGIN_USER:
			return { ...state, loggedInError: false, loading: true, isLoggedIn: false };	
		case types.LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload, isLoggedIn: true, loading: false, loggedInError: false};
		case types.LOGIN_USER_FAIL:
			return { ...state, loggedInError: true, password: '', loading:false };
		case types.SIGNUP_USER:
			return { ...state, error: '', loading: true, error: '' };	
		case types.SIGNUP_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload, isLoggedIn: true, loading: false };
		case types.LOGOUT_USER:
			console.log('Logging out');
			return { ...INITIAL_STATE, isLoggedIn: false };	
		case REHYDRATE:
		    if (!payload.LoginReducer) {
		      return state;
		    }
		    /* rehydrated data */
		    const { isLoggedIn } = payload.LoginReducer;
		    return {
		      ...INITIAL_STATE,
		      isLoggedIn,
		    };
				
		default:
		  return state;
	}
}