import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	USER_LOGOUT
} from '../_actions/types';
import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = { 
	loading: false,
	isLoggedIn: false,
	user: null,
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN_USER:
			return { ...state, error: '', loading: true, error: '' };	
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, ...payload, isLoggedIn: true };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading:false };
		case USER_LOGOUT:
			console.log('Logging out');
			return { ...INITIAL_STATE };	
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