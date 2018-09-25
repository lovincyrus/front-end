/* Import statements */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { createBrowserHistory } from 'history';

import Header from './components/header';
import Footer from './components/footer';

/* Import pages */
import Home from './pages/home';
import TokenSale from './pages/token-sale';
import About from './pages/about';

/*Test for kevin*/
import HomeRevised from './pages/home2';

import './assets/stylesheets/app.scss';
import ProtocolWeekly from './pages/protocol-weekly';

const history = createBrowserHistory();

/* App component */
class App extends React.Component {
  render() {
    return (
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/" component={HomeRevised}/>
              <Route exact path="/token-sale" component={TokenSale}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/protocol-weekly" component={ProtocolWeekly}/>
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
};

export default App;
