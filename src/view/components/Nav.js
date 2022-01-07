// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/nav.css';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
  render() {
    let navLinks = new Array(this.props.links.length);
    for (let i = 0; i < this.props.links.length; i++) {
      let ln = this.props.links[i];
      if (ln.address === '/')
        navLinks[i] = <NavLink exact to={ln.address}
          rel='noopener noreferrer' key={i}>{ln.name}</NavLink>;
      else
        navLinks[i] = <NavLink to={ln.address}
          rel='noopener noreferrer' key={i}>{ln.name}</NavLink>;
    }
    return (
      <nav id='nav' className={this.props.className} >
        {navLinks}
      </nav>
    );
  }
}
export default Nav;
