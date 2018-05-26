import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Preload from './src/screens/Preload';
import PaginaInicial from './src/screens/PaginaInicial';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = StackNavigator({
  Preload:{
    screen:Preload
  },

  SignIn:{
    screen:SignIn
  },
  
  PaginaInicial:{
    screen:PaginaInicial,
    navigationOptions:{
            header:null
        }
  },

  SignUp:{
    screen:SignUp
  },
  
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navegador />
      </Provider>
    );
  }
}