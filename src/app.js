/* Import statements */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

/* Home component */
import Home from './pages/home';

import './assets/stylesheets/app.scss';

/* App component */
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path="/" component={Home}/>
        <Footer/>
      </div>
    );
  }
};

export default App;
