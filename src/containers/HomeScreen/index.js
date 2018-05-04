import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { logoutUser } from '../../_actions';
/**
 * Just a centered logout button.
 */
class HomeScreen extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  render () {
    console.log('logout',this.props.logout);
    return (
      <View style={styles.container}>
        <CustomButton
          text={'Logout'}
          onPress={this.props.logout}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    )
  }
}

export default connect(null, {logoutUser}) (HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
