import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-animatable';

import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import metrics from '../../config/metrics'

export default class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onLoginPress: PropTypes.func.isRequired,
    onSignupLinkPress: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: '',
    showError: false,
    errorMessage: '',
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300),
        this.errorRef.fadeOut(350)
      ])
    }
  }

  login = () => {
    const { email, password } = this.state;
    const { onLoginPress } = this.props;
    onLoginPress({ email,password }, () => {
      this.props.navigation.navigate('App');
    }, (errorMessage) => {
      this.setState({ showError: true, errorMessage });
    });
  }

  render () {
    const { email, password, showError, errorMessage } = this.state
    const { isLoading, onSignupLinkPress, onLoginPress, error } = this.props
    const isValid = email !== '' && password !== '';
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => { this.formRef = ref }}>
          <CustomTextInput
            name={'email'}
            ref={(ref) => this.emailInputRef = ref}
            placeholder={'Email'}
            keyboardType={'email-address'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ email: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            name={'password'}
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <CustomButton
              onPress={() => this.login()}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.loginButton}
              textStyle={isValid ? styles.loginButtonText : styles.loginButtonTextDisabled }
              text={'Log In'}
            />
          </View>
          { showError && 
            <View 
              style={styles.error}
              ref={(ref) => this.errorRef = ref}
            >
              <Text style={styles.errorText}>
                {errorMessage.message}
              </Text>  
            </View>
          }
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signupLink}
            onPress={onSignupLinkPress}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Not registered yet?'}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 150,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: 'white'
  },
  loginButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
  },
  loginButtonTextDisabled: {
    color: 'lightgrey',
    fontWeight: 'bold'
  },
  signupLink: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  },
  error: {
    marginTop: 10,
    backgroundColor:'#ef5350',
    alignSelf: 'stretch',
    padding: 10,
  },
  errorText: {
    color: 'white',
  }
})
