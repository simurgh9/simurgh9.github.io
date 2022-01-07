// Copyright (C) 2020 Tashfeen, Ahmad

import './css/frame.css';
import './css/mobile.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Header, Page, Resume, Footer
} from './components/ComponentIndex.js';


class Frame extends Component {
  constructor(props) {
    super(props);
    this.control = props.control;
    this.control.setFrame(this);
    this.state = this.control.M().getReactState();
  }

  resumeRenderJob(props) {
    return <Resume {...props}
      key={0}
      json={this.state.resume}
      updateResumeState={this.control.updateResumeState} />;
  }

  markdown(k, file = null, aside = null) {
    return (props) => <Page {...props} {...this.state.page}
      key={k} updatePageState={this.control.updatePageState} />;
  }

  render() {
    return ( // Router should be in the index.js
      <div id='frame'>
        <Header {...this.state.header} />
        <Switch>
          <Route exact path='/' render={this.markdown(1)} />
          <Route path='/resume' render={this.resumeRenderJob.bind(this)} />
          <Route path='/:filename' render={this.markdown(2)} />
        </Switch>
        <Footer footer={this.state.footer} />
      </div>
    );
  }
}

export default Frame;
