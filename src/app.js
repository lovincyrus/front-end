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
import Beta from './pages/beta';
import ProtocolWeekly from './pages/protocol-weekly';
import About from './pages/about';

import './assets/stylesheets/app.scss';

const history = createBrowserHistory();

/* App component */
class App extends React.Component {
  render() {
    return (
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/beta" component={Beta}/>
              <Route exact path="/protocol-weekly" component={ProtocolWeekly}/>
              <Route exact path="/about" component={About}/>
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
};

export default App;
