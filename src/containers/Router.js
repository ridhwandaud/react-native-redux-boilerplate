import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Auth from './LoginScreen';

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

export default StackNavigator(
{
  Auth: {
    screen: Auth,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
},
  { headerMode: 'screen' },
);