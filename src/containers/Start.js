import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import AuthScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import { loginUser, logoutUser, signupUser } from '../_actions';

class Start extends Component{

	 static navigationOptions = {
   	 	header: null,
  	}

	render(){
		const { login, loginUser, logoutUser, signupUser } = this.props;
		if (login.isLoggedIn) {
	      return (
	        <HomeScreen
	          logout={() => logoutUser()}
	        />
	      )
	    } else {
	      return (
	        <AuthScreen
	          login={loginUser}
	          signup={logoutUser}
	          isLoading={login.loading}
	          isLoggedIn={login.isLoggedIn}
	          error={login.error}
	          onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
	        />
	      )
	    }
	}
}


const mapStateToProps = ({ LoginReducer }) => ({
	login: LoginReducer,
});

export default connect(mapStateToProps, { logoutUser, loginUser, signupUser })(Start);