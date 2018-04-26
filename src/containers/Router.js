import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

export default StackNavigator({
  Login: {
    screen: Login,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
});