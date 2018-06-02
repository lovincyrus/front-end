/* Import statements */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

/* Import pages */
import Home from './pages/home';
import TokenSale from './pages/token-sale';

import './assets/stylesheets/app.scss';

/* App component */
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/token-sale" component={TokenSale}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
};

export default App;
