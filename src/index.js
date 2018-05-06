import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// main app
import App from './App.js';

ReactDOM.render((
  <BrowserRouter>
      <App/>
  </BrowserRouter>
), document.getElementById('app'))
