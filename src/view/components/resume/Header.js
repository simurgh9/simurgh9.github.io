import '../../css/resume.css';

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section id='resume-header'>
        <div>
          <h1>{this.props.data.name}</h1>
          {this.props.data.majors}
        </div>
        <div className='right-align'>
          {this.props.data.email} <br/>
          <a download target='_blank' rel='noopener noreferrer' href={this.props.downloadUrl}>Download PDF</a>
        </div>
      </section>
    );
  }
}

export default Header;
