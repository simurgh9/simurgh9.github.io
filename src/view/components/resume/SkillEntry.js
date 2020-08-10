import '../../css/resume.css';

import React, { Component } from 'react';


class SkillEntry extends Component {
  render() {
    return (
      <section className='entry'>
        <div><b>{this.props.data.title}</b>: {this.props.data.description}</div>
      </section>
    );
  }
}

export default SkillEntry;
