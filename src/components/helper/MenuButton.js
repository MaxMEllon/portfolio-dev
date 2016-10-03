import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';

const isFunc = obj => typeof obj === 'function';

export default class MenuButton extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { };
    autoBind(this);
  }

  onClick() {
    if (isFunc(this.props.onClick)) this.props.onClick();
  }

  render() {
    const icon = `fa fa-${this.props.icon}`;
    return (
      <div
        className="menu-button"
        onClick={this.onClick}
      >
        <p>
          <i className={icon} aria-hidden="true" />
          {this.props.text}
        </p>
      </div>
    );
  }
}
