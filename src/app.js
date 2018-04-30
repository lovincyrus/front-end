/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

/* Home component */
import Home from './pages/home/';
import styles from './styles/global.scss';

/* App component */
class App extends Component {
  render() {
    return (
      <div class="container">
        <nav>
          <ul>
            <li><Link to="/">Homes</Link></li>
          </ul>
        </nav>

        <Route path="/" component={Home}/>

      </div>
    )
  }
};

export default App;
