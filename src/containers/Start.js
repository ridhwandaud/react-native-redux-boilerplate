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

  	componentWillMount(){
  		const { login } = this.props;
  		this.props.navigation.navigate(login.isLoggedIn ? 'App' : 'Auth');
  	}

	render(){
		const { login, loginUser, logoutUser, signupUser, ...props } = this.props;
	      return (
	        <AuthScreen
	       	  {...props}
	          login={loginUser}
	          signup={signupUser}
	          isLoading={login.loading}
	          isLoggedIn={login.isLoggedIn}
	          error={login.loggedInError}
	          onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
	        />
	      )
	}
}


const mapStateToProps = ({ LoginReducer }) => ({
	login: LoginReducer,
});

export default connect(mapStateToProps, { logoutUser, loginUser, signupUser })(Start);