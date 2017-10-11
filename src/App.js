import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
