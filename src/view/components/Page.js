// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/page.css';
import 'katex/dist/katex.min.css';

import React, { Component } from 'react';
import { Aside, Markdown } from './ComponentIndex.js';

class Page extends Component {
  componentDidMount() {
    let path = this.props.location.pathname;
    this.props.updatePageState(path.substring(1));
  }

  render() { // section element here renders h1 as h(n+1)
    let md = <div id='main'><Markdown content={this.props.text} /></div>;
    let aside = this.props.aside ? <Aside data={this.props.aside} /> : null;
    let ret = <div id='page'>{md}{aside}</div>;
    if (this.props.lang)
      ret = <div id='page' dir='auto' lang={this.props.lang}>{md}{aside}</div>;
    return ret;
  }
}

export default Page;
