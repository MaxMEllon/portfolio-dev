import React, { Component } from 'react';
import { connect } from 'react-redux';
import SweetScroll from 'sweet-scroll';
import autoBind from 'react-autobind';
import deepCompare from 'react-addons-deep-compare';
import MenuButton from './helper/MenuButton';
import * as actions from '../actions';

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerVisible: false,
    };
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(actions.scrollAction(false));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return deepCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className="top-menu">
        <div className="menu-box">
          <MenuButton
            icon="user"
            text="About"
            onClick={() => this.props.onClick('.about')}
          />
          <MenuButton
            icon="desktop"
            text="Environment"
            onClick={() => this.props.onClick('.environment')}
          />
          <MenuButton
            icon="file-text-o"
            text="Articles"
            onClick={() => this.props.onClick('.articles')}
          />
          <MenuButton
            icon="child"
            text="Activities"
            onClick={() => this.props.onClick('.activities')}
          />
          <MenuButton
            icon="code"
            text="Projects"
            onClick={() => this.props.onClick('.projects')}
          />
          <MenuButton
            icon="globe"
            text="Links"
          />
        </div>
        <div className="me" />
        <span className="name-badge">maxmellon</span>
        {(() => {
          const klass = this.props.isTop === true ? 'bounceIn' : 'bounceOut';
          return (
            <div
              className={`up-button footer animated ${klass}`}
              onClick={() => this.props.onClick('.top-menu')}
            >
              <p className="page-up">
                <i
                  className="fa fa-chevron-up"
                  aria-hidden="true"
                />
              </p>
            </div>
          );
        })()}
      </div>
    );
  }
}


export default connect(
  state => ({
    isTop: state.scrollReducer.enableScroll,
  })
)(TopMenu);
