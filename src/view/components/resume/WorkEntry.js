import '../../css/resume.css';

import React, { Component } from 'react';


class WorkEntry extends Component {
  render() {
    let bullets = [], key = 0;
    for (let bullet of this.props.data.bullets) {
      bullets.push(<li key={key}>{bullet}</li>);
      key++;
    }
    return (
      <section>
        <section className='entry'>
          <div>
            <h4>{this.props.data.name}</h4>
            <i>{this.props.data.position}</i>
          </div>
          <div className='right-align'>
            {this.props.data.location} <br/>
            <i>{this.props.data.date}</i>
          </div>
        </section>
        <ul className='resume-list'>
          {bullets}
        </ul>
      </section>
    );
  }
}

export default WorkEntry;
