import '../../css/resume.css';

import React, { Component } from 'react';


class SectionTitle extends Component {
  render() {
    return (
      <section id='resume-section-title'>
        <h1>{this.props.name}</h1>
        <hr />
      </section>
    );
  }
}

export default SectionTitle;
