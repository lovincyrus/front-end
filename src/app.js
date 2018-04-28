/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

/* Home component */
import Home from './pages/home/'

/* App component */
class App extends Component {
  render() {
    return (
      <div>
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
