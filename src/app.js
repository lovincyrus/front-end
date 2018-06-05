/* Import statements */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/header';
import Footer from './components/footer';

/* Import pages */
import Home from './pages/home';
import TokenSale from './pages/token-sale';

import './assets/stylesheets/app.scss';

const history = createBrowserHistory();

/* App component */
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/token-sale" component={TokenSale}/>
          </Switch>

          <Footer/>
        </div>
      </Router>
    );
  }
};

export default App;
