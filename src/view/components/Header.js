// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/header.css';

import React, { Component } from 'react';
import { Nav } from './ComponentIndex.js';


class Header extends Component {
  render() {
    return (
      <header id='header'>
        <span id='logo'>ق &nbsp;</span>
        <h1 id='text'>
          tashfeen.org
          <Nav />
        </h1>
      </header>
    );
  }
}

export default Header;
