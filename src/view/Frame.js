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

  componentDidMount() {
    // the controller method must be called before the
    // script tag is added.
    this.control.updateMathJaxStateToLoaded();
    // now, we add the script tag, once MathJax is
    // loaded, the above call will update the model.
    let script = document.createElement('script');
    script.id = 'MathJax-script';
    script.defer = true;
    script.src = this.state.mathjax.link;
    document.head.appendChild(script);
  }

  componentDidUpdate() {
    if (this.state.mathjax.loaded)
      window.MathJax.typesetPromise();
  }

  resumeRenderJob(props) {
    return <Resume {...props}
      key={props.location.pathname}
      json={this.state.resume}
      updateResumeState={this.control.updateResumeState} />;
  }

  markdown(file = null, aside = null) {
    return (props) => <Page {...props} {...this.state.page}
      key={props.location.pathname}
      absolutePath={this.control.M().absolutePath}
      updatePageState={this.control.updatePageState} />;
  }

  render() {
    return ( // Router should be in the index.js
      <div id='frame'>
        <Header {...this.state.header} />
        <Switch>
          <Route exact path='/' render={this.markdown()} />
          <Route path='/resume' render={this.resumeRenderJob.bind(this)} />
          <Route path='/:filename' render={this.markdown()} />
        </Switch>
        <Footer footer={this.state.footer} />
      </div>
    );
  }
}

export default Frame;
