import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";

import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    {/* <Navigation /> */}
    <Switch>
      <Route path='/' exact component={Navigation} />
      <Route path='/About' component={Navigation} />
      <Route path='/Contact' component={Navigation} />
    </Switch>
  </Router>
);

export default App;
