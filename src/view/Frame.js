import './css/frame.css';
import './css/mobile.css';

import Model from '../../src/model/Model.js';
import Control from '../../src/control/Control.js';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, MdPage, Resume, Footer, Error } from './components/ComponentIndex.js';


class Frame extends Component {
  constructor(props) {
    super(props);
    this.control = new Control(this);
    this.model = new Model();
    this.state = this.model.getReactState();
  }

  resumeRenderJob(props) {
    return <Resume {...props} resumeData={this.state.resumeData} key={0} />;
  }

  homeRenderJob(props) {
    return <MdPage {...props} hasAside={true} asideData={this.state.bookmarks} fileName={'home.md'} key={1} />;
  }

  aboutRenderJob(props) {
    return <MdPage hasAside={false} fileName={'about.md'} key={2} />;
  }

  render() {
    return (
      <div id='frame'>
        <Header />
        <Switch>
          <Route exact path='/' render={this.homeRenderJob.bind(this)} />
          <Route path='/resume' render={this.resumeRenderJob.bind(this)} />
          <Route path='/about' render={this.aboutRenderJob.bind(this)} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Frame;
