import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Router from './route'
import Header from './common/header'
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
        <Router/>
      </Provider>
    );
  }
}

export default App;
