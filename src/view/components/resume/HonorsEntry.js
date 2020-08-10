import '../../css/resume.css';

import React, { Component } from 'react';


class HonorsEntry extends Component {
  render() {
    return (
      <section className='entry'>
        <div>
          <h4>{this.props.data.title}</h4>
          <i>{this.props.data.description}</i>
        </div>
        <div className='right-align'>
          {this.props.data.location} <br/>
          <i>{this.props.data.date}</i>
        </div>
      </section>
    );
  }
}

export default HonorsEntry;
