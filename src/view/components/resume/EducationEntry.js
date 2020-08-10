import '../../css/resume.css';

import React, { Component } from 'react';


class EducationEntry extends Component {
  render() {
    return (
      <section className='entry'>
        <div>
          <h4>{this.props.data.name}</h4>
          <i>{this.props.data.degree}</i>
        </div>
        <div className='right-align'>
          {this.props.data.location} <br/>
          <i>Graduation: {this.props.data.date}</i>
        </div>
      </section>
    );
  }
}

export default EducationEntry;
