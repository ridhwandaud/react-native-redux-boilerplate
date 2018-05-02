import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import Router from './containers/Router';
import configureStore from './store';
import firebase from 'firebase';

const WHITELISTED_REDUCER = ['LoginReducer'];

class App extends Component {

  state = {
    store: configureStore(),
    isHydrated: false, /* redux-persist */
  }

  componentWillMount() {
    const { store } = this.state;
    console.log('WHITELISTED_REDUCER', WHITELISTED_REDUCER);
    persistStore(store, { storage: AsyncStorage, whitelist: WHITELISTED_REDUCER }, () => {
      this.setState({ isHydrated: true });
    });

    const config = {
      apiKey: 'AIzaSyAKVZr3v2TePkF3kDZ0-Obr_ltzPHkBGDE',
      authDomain: 'manager-154fc.firebaseapp.com',
      databaseURL: 'https://manager-154fc.firebaseio.com',
      projectId: 'manager-154fc',
      storageBucket: 'manager-154fc.appspot.com',
      messagingSenderId: '492235088441'
    };
    firebase.initializeApp(config);
  }
  render() {
    const { store, isHydrated } = this.state;

    if (!isHydrated) return null;

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

