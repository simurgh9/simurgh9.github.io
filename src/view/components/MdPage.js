import '../css/mdpage.css';

import React, { Component } from 'react';
import { Aside } from './ComponentIndex.js';
import Markdown from 'react-markdown';


class MdPage extends Component {
  constructor(props) {
    super(props);
    this.state = { markdownText: 'Do, Re, Mi, Fa, Sol, La, Tiii...' };
  }

  componentDidMount() {
    fetch(require('../../model/markdown/' + this.props.fileName))
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({ markdownText: text });
      });
  }

  render() {
    let aside = this.props.hasAside ? <Aside data={this.props.asideData} /> : null;
    return (
      // section element here renders h1 as h(n+1)
      <div id='mdpage'>
        <div id='main'>
          <Markdown
            source={this.state.markdownText}
            linkTarget={'_blank'}
            skipHtml={true} />
        </div>
        {aside}
      </div>
    );
  }
}
export default MdPage;
