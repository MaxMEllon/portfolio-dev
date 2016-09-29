import _ from 'lodash';
import React, { Component } from 'react';
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
    this.props.dispatch(actions.fetchActivities());
    this.sweetScroll = new SweetScroll({
      duration: 1000,
      easing: 'easeOutBounce',
    });
  }

  componentWillUpdate(nextProps) {
    this.sweetScroll.to(nextProps.selectedPage);
  }

  handleClick(payload) {
    this.props.dispatch(actions.selectPage(payload));
  }

  render() {
    return (
      <div className="top-container">
        <div className="top" />
        <TopMenu
          dispatch={this.props.dispatch}
          onClick={(payload) => this.handleClick(payload)}
        />
        <About />
        <Environment />
        <Articles />
        <Activities activities={_.get(this.props, 'activities', null)} />
        <Projects />
      </div>
    );
  }
}

export default connect(
  state => {
    console.info(state.activitiyReducer);
    return {
      selectedPage: state.indexReducer.selectedPage,
      activities: state.activitiyReducer.activities,
    };
  }
)(Top);
