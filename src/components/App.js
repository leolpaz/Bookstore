import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import '../assets/App.css';

// components

import NavBar from './Nav';
import Books from './Books';
import Categories from './Categories';

const App = () => (
  <Provider store={store}>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Provider>
);

export default App;
