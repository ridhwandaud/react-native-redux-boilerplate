import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../_actions';
import { Card, CardSection, Input, Button, Spinner } from '../components/common';

class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {email: '', password: '' };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.props.loginUser({ email, password });
  }

  componentDidUpdate(){
    console.log('go to login page');
    if (this.props.isLoggedIn){
      console.log('go to login page');
    }
  }

  renderButton(){
    if(this.props.loading){
        return <Spinner size="large" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
      );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={(text) => this.setState({ email: text})}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={(text) => this.setState({ password: text})}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateToProps = ({ LoginReducer }) => {
  const { email, password, error, loading } = LoginReducer;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);