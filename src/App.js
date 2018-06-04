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
    persistStore(store, { storage: AsyncStorage, whitelist: WHITELISTED_REDUCER }, () => {
      this.setState({ isHydrated: true });
    });

    const config = {
      // Change to your own firebase
      apiKey: "XXXXXXXX",
      authDomain: "XXXXXXXX",
      databaseURL: "XXXXXXXX",
      projectId: "XXXXXXXX",
      storageBucket: "",
      messagingSenderId: "XXXXXXXX"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
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

