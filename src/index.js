import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Frame from './view/Frame';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Frame />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
