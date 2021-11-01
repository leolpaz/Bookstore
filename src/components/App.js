import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components

import NavBar from './Nav';
import Books from './Books';
import Categories from './Categories';

const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </>
);

export default App;
