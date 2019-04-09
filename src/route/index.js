import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../page/home'
import Detail from '../page/detail'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/detail' exact component={Detail} />
      </BrowserRouter>
    );
  }
}

export default Router;
