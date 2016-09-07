import React, { Component } from 'react';
import TopMenu from '../components/TopMenu';
import About from '../components/About';
import Environment from '../components/Environment';
import Articles from '../Components/Articles';
import Activities from '../components/Activities';
import Projects from '../components/Projects';

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
        <Articles />
        <Activities />
        <Projects />
      </div>
    );
  }
}
