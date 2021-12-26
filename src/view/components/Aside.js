// Copyright (C) 2020 Tashfeen, Ahmad

import '../css/aside.css';

import React, { Component } from 'react';


class Aside extends Component {
  bookmarks() {
    let ret = [];
    for (let i = 1; i < this.props.data.length; i++) {
      ret.push(<li key={i}>
                 <a
                   target='_blank'
                   rel='noopener noreferrer'
                   href={this.props.data[i].url}>
                   {this.props.data[i].title}
                 </a>
               </li>);
    }
    return ret;
  }

  render() {
    return (
      <aside id='aside'>
        <h3>{this.props.data[0].title}</h3>
        <ul>
          {this.bookmarks()}
        </ul>
      </aside>
    );
  }
}

export default Aside;
