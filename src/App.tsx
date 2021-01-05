/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView, Text,
} from 'react-native';

import {Router} from 'react-native-router-flux';
import Scenes from './router';

import Reducer from './store/reducer';
import {Provider} from "react-redux";
import {createStore} from "redux";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Provider store={createStore(Reducer)}>
        <SafeAreaView style={{flex: 1}}>
            <Router scenes={Scenes}>
            </Router>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
