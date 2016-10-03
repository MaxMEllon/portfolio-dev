import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    autoBind(this);
  }

  onClickWot() {
    window.open('http://wotlabs.net/sea/player/dot_vimrc', '_blank');
  }

  render() {
    return (
      <div className="about">
        <h1 className="title">
          <i className="fa fa-user" />About me
        </h1>
        <hr className="border-line" />
        <table>
          <tbody>
            <tr>
              <td className="label">Handle</td>
              <td className="content">MaxMellon</td>
            </tr>
            <tr>
              <td className="label">Name</td>
              <td className="content">Kento TSUJI</td>
            </tr>
            <tr>
              <td className="label">Game</td>
              <td className="content">World of Tanks</td>
              <td className="detail">
                WN8 : 1735 WR : 55.79%
                <a className="link" onClick={this.onClickWot}>
                  <i className="fa fa-external-link" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="label" />
              <td className="content">城とドラゴン</td>
              <td className="detail">{'うまP : 1454 (2016/08/23)'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
