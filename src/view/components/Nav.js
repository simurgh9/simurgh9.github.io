import '../css/nav.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav id='nav'>
        <Link to='/'>Home</Link> &nbsp;
        <Link to='/resume'>Résumé</Link> &nbsp;
        <Link to='/about'>About</Link>
      </nav>
    );
  }
}
export default Nav;
