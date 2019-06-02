import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../common/header'
import Login from '../page/login'
import Home from '../page/home'
import Detail from '../page/detail'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/detail/:id' exact component={Detail} />
      </BrowserRouter>
    );
  }
}

export default Router;
