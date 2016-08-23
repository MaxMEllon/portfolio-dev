import React, { Component } from 'react';
import TopMenu from '../components/TopMenu';
import About from '../components/About';
import Environment from '../components/Environment';

export default class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="top-container">
        <div className="top" />
        <TopMenu />
        <About />
        <Environment />
      </div>
    );
  }
}
