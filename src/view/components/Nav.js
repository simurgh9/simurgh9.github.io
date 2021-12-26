// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/nav.css';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav id='nav' className={this.props.className} >
        <NavLink exact to='/' rel='noopener noreferrer' >Home</NavLink> &nbsp;
        <NavLink to='/resume' rel='noopener noreferrer' >Résumé</NavLink> &nbsp;
        <NavLink to='/about.md' rel='noopener noreferrer' >About</NavLink>
      </nav>
    );
  }
}
export default Nav;
