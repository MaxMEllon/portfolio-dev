import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SweetScroll from 'sweet-scroll';
import TopMenu from '../components/TopMenu';
import About from '../components/About';
import Environment from '../components/Environment';
import Articles from '../components/Articles';
import Activities from '../components/Activities';
import Projects from '../components/Projects';
import * as actions from '../actions/index';

class Top extends Component {
  componentDidMount() {
    this.sweetScroll = new SweetScroll({
      duration: 1000,
      easing: 'easeOutBounce',
    });
  }

  componentWillUpdate(nextState) {
    this.sweetScroll.to(nextState.selectedPage);
  }

  handleClick(payload) {
    this.props.dispatch(actions.selectPage(payload));
  }

  render() {
    console.info(this.props);
    return (
      <div className="top-container">
        <div className="top" />
        <TopMenu
          onClick={(payload) => this.handleClick(payload)}
        />
        <About />
        <Environment />
        <Articles />
        <Activities />
        <Projects />
      </div>
    );
  }
}


export default connect(
  state => ({
    selectedPage: state.indexReducer.selectedPage,
  })
)(Top);
