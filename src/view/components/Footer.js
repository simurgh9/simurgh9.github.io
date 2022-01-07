// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/footer.css';

import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer id='footer'>{this.props.footer}</footer>
    );
  }
}

export default Footer;
