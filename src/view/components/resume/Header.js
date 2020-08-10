import '../../css/resume.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/resume_tashfeen.pdf" target="_blank" download>Download PDF</Link>
        </div>
      </section>
    );
  }
}

export default Header;
