import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import StartScreen from './Start';
import HomeScreen from './HomeScreen';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ StartScreen: StartScreen });

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
