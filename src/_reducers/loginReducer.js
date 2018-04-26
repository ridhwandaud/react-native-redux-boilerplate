import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	USER_LOGOUT
} from '../_actions/types';

const INITIAL_STATE = { 
	loading: false,
	isLoggedIn: false,
	user: null,
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case EMAIL_CHANGED:
			return { ...state, email: payload };
		case PASSWORD_CHANGED:
			return { ...state, password: payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };	
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, ...payload, isLoggedIn: true };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading:false };
		case USER_LOGOUT:
			console.log('Logging out');
			return { ...INITIAL_STATE };		
		default:
		  return state;
	}
}