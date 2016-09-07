import React, { Component } from 'react';

export default class Environment extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="environment">
        <h1 className="title">
          <i className="fa fa-desktop" /> Environment
        </h1>
        <hr className="border-line" />
        <table>
          <tbody>
            <tr>
              <td className="label">Shell</td>
              <td className="content">
                zsh
                <a className="link" href="https://github.com/MaxMEllon/.vim">
                  <i className="fa fa-external-link" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="label">Editor</td>
              <td className="content">
                Vim(CLPUM, MacVim-KaoriYa), NeoVim(NyaoVim, NeoVim-qt)
                <a className="link" href="https://github.com/MaxMEllon/.vim">
                  <i className="fa fa-external-link" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="label">Language</td>
              <td className="content">ECMAScript, Ruby, PHP, Elixir, C#</td>
            </tr>
            <tr>
              <td className="label">FrontEnd</td>
              <td className="content">React.js, WPF</td>
            </tr>
            <tr>
              <td className="label">BackEnd</td>
              <td className="content">Rails, Laravel, Sinatra</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
