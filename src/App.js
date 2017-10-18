import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDzE0BpJACBrzU7SmId6PvHLzopg9qQBDQ",
      authDomain: "manager-rn-92641.firebaseapp.com",
      databaseURL: "https://manager-rn-92641.firebaseio.com",
      projectId: "manager-rn-92641",
      storageBucket: "",
      messagingSenderId: "618552373345"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
