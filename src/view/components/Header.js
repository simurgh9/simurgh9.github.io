// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/header.css';

import React, { Component } from 'react';
import { Nav } from './ComponentIndex.js';


class Header extends Component {
  render() {
    return (
      <header id='header'>
        <div id='left'>
          <span id='logo' className='convexhull'>{this.props.logo}</span>
          <span id='text' className='convexhull'>{this.props.title}</span>
        </div>
        <Nav className='debug convexhull' />
      </header>
    );
  }
}

export default Header;
