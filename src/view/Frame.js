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
    this.pageKey = 0;
    this.control = props.control;
    this.control.setFrame(this);
    this.state = this.control.M().getReactState();
  }

  resumeRenderJob(props) {
    return (
      <Resume {...props}
        loading={this.state.loading}
        resumeUrl={this.state.root + this.state.resume}
        key={this.uniqueKey()}
      />);
  }

  markdown(file = null, aside = null) {
    return (props) => <Page {...props}
      key={this.uniqueKey()}
      file={file}
      aside={aside}
      root={this.state.root}
      loading={this.state.loading} />;
  }

  uniqueKey() { // this MUST return a unique key each invocation
    // console.log(this.pageKey);
    return this.pageKey++;
  }

  render() {
    let st = this.state;
    return ( // Router should be in the index.js
      <div id='frame'> {/* onClick={this.control.clickEventHandler} */}
        <Header logo={this.state.logo} title={this.state.title} />
        <Switch>
          <Route exact path='/' render={this.markdown(st.home, st.bookmark)} />
          <Route path='/resume' render={this.resumeRenderJob.bind(this)} />
          <Route path='/:filename' render={this.markdown()} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Frame;
