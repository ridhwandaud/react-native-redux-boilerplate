import { 
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT_USER
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
			return { ...state, ...INITIAL_STATE, ...payload, isLoggedIn: true, loading: false };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading:false };
		case LOGOUT_USER:
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