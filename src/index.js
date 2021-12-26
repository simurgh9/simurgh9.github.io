import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './view/Frame';
import Model from './model/Model.js';
import Control from './control/Control.js';
// create-react-app.dev/docs/deployment/#notes-on-client-side-routing
import { BrowserRouter as Router} from 'react-router-dom';

let model = new Model();
let control = new Control(model);

ReactDOM.render( // Keep the router here or not all links work.
  <React.StrictMode>
    <Router>
      <Frame control={control} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
