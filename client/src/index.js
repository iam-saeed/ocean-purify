import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const DATA = [];

ReactDOM.render(
  <Router>
    <App data={DATA} />
  </Router>,
  document.getElementById('root')
);
