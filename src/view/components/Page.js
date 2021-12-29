// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/page.css';
import 'katex/dist/katex.min.css';

import React, { Component } from 'react';
import { Aside, Markdown } from './ComponentIndex.js';

class Page extends Component {
  constructor(props) {
    super(props);
    let RT = props.root;
    let fileUrl = props.file ? RT + props.file : RT + props.match.params.filename;
    fileUrl = fileUrl.endsWith('.md') ? fileUrl : fileUrl + '.md';
    this.state = {
      error: 'Squeak-a-plinggg! File not found.',
      asideData: null,
      url: fileUrl,
      markdownText: this.props.loading,
    };
  }

  componentDidMount() {
    fetch(this.state.url).then(rsp => {
      if (rsp.ok)
        return rsp.text();
      return this.props.loading + ' ' + this.state.error;
    }).then(text => {
      this.setState({ markdownText: text });
    });
    // only fetch aside data (e.g., bookmarks) if a filename was specified
    if (this.props.aside !== null) {
      let asideUrl = this.props.root + this.props.aside;
      fetch(asideUrl).then(rsp => rsp.json()
      ).then(json => {
        this.setState({ asideData: json });
      });
    }
  }

  hasLangTag() {
    let txt = this.state.markdownText.trim();
    let lastLine = txt.substring(txt.lastIndexOf('\n') + 1);
    lastLine = lastLine.replace(/\s/g, ''); // clearn all whitespace
    let rxp = /<!--lang:(.*?)-->/;
    if (!rxp.test(lastLine)) // is the last line a comment of form <!--lang:*-->?
      return false; // if not, there is no lang tag
    return rxp.exec(lastLine)[1]; // if yes, then return the lang code, e.g., ur
  }

  render() {
    let md = <div id='main'><Markdown content={this.state.markdownText} /></div>;
    let aside = this.state.asideData ? <Aside data={this.state.asideData} /> : null;
    let lang = this.hasLangTag();
    let ret = <div id='page'>{md}{aside}</div>;
    if (lang) // section element here renders h1 as h(n+1)
      ret = <div id='page' dir='auto' lang={lang}>{md}{aside}</div>;
    return ret;
  }
}

export default Page;
