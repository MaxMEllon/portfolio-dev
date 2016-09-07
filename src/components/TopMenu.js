import React, { Component } from 'react';
import SweetScroll from 'sweet-scroll';
import autoBind from 'react-autobind';
import deepCompare from 'react-addons-deep-compare';
import MenuButton from './helper/MenuButton';

const not = obj => !obj;

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerVisible: false,
    };
    autoBind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll , false);
    this.sweetScroll = new SweetScroll({
      duration: 1000,
      easing: 'easeOutBounce',
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return deepCompare(this, nextProps, nextState);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const footerVisible = not(window.scrollY === 0);
    this.setState({ footerVisible });
  }

  onClickAbout() {
    this.sweetScroll.to('.about');
  }

  onClickEnvironment() {
    this.sweetScroll.to('.environment');
  }

  onClickPageUp() {
    this.sweetScroll.to('top-menu');
  }

  render() {
    return (
      <div className="top-menu">
        <div className="menu-box">
          <MenuButton
            icon="user"
            text="About"
            onClick={this.onClickAbout}
          />
          <MenuButton
            icon="desktop"
            text="Environment"
            onClick={this.onClickEnvironment}
          />
          <MenuButton
            icon="file-text-o"
            text="Articles"
          />
          <MenuButton
            icon="child"
            text="Activities"
          />
          <MenuButton
            icon="code"
            text="Projects"
          />
          <MenuButton
            icon="globe"
            text="Links"
          />
        </div>
        <div className="me" />
        <span className="name-badge">maxmellon</span>
        {(() => {
          const klass = this.state.footerVisible === true ? 'bounceIn' : 'bounceOut';
          return (
            <div
              className={`up-button footer animated ${klass}`}
              onClick={this.onClickPageUp}>
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
