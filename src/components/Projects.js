import React, { Component } from 'react';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="projects">
        <h1 className="title">
          <i className="fa fa-code" /> Projects
        </h1>
        <hr className="border-line" />
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/teratail-cli"
            >
              <i className="fa fa-github" />
            </a>
            teratail-cli
          </h2>
          <ul className="tag-list">
            <li>bash</li>
          </ul>
          <p>
            <b>bash script</b>shell scriptの練習として作ってみた
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/yarn_completion"
            >
              <i className="fa fa-github" />
            </a>
            yarn_completion
          </h2>
          <ul className="tag-list">
            <li>zsh</li>
          </ul>
          <p>
            <b>zsh用補完 Plugin</b>yarnコマンドを補完したかったので作成．
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/react-simple-slider"
            >
              <i className="fa fa-github" />
            </a>
            react-simple-slider
          </h2>
          <ul className="tag-list">
            <li>React.js</li>
            <li>javascript</li>
          </ul>
          <p>
            <b>React.js用UI Plugin</b>シンプルなものが欲しかったがなかったため自作．
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/babel-plugin-transform-isNil"
            >
              <i className="fa fa-github" />
            </a>
            babel-plugin-transform-isNil
          </h2>
          <ul className="tag-list">
            <li>babel</li>
            <li>Node.js</li>
          </ul>
          <p>
            ECMAScript2015トランスパイラであるbabel用プラグイン
            <br />
            Coffee Script における存在確認演算子 "?" が便利であったので実装
            <br />
            <code>hoge.isNil</code>
            のような文法を提供する
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/react-addons-deep-compare"
            >
              <i className="fa fa-github" />
            </a>
            react-addons-deep-compare
          </h2>
          <ul className="tag-list">
            <li>React.js</li>
            <li>javascript</li>
          </ul>
          <p>
            <b>React.js用アドオン</b>
            <br />
            life cycleの <code>shouldComponentUpdate</code>の実装を楽にする
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/vim-jsx-pretty"
            >
              <i className="fa fa-github" />
            </a>
            vim-jsx-pretty
          </h2>
          <ul className="tag-list">
            <li>Vim script</li>
            <li>Vim plugin</li>
          </ul>
          <p>
            <b>Vim用プラグイン</b>
            <br />
            既存のjsx用syntax-highlightが微妙にくずれているために実装
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/poipoi"
            >
              <i className="fa fa-github" />
            </a>
            poipoi
          </h2>
          <ul className="tag-list">
            <li>javascript</li>
            <li>React.js</li>
            <li>Sinatra</li>
            <li>Ruby</li>
          </ul>
          <p>
            <b>csv管理Webアプリケーション</b>
            <br />
            フロントをReact.js, バックエンドをSinatraで実装
            <br />
            3~4時間で雑に作ったもの
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/music.nyaovim"
            >
              <i className="fa fa-github" />
            </a>
            music.nyaovim
          </h2>
          <ul className="tag-list">
            <li>javascript</li>
            <li>Vim script</li>
            <li>Polymer</li>
          </ul>
          <p>
            <b>Simple mp3 player on Nyaovim for mac.</b>
            <br />
            NyaoVim用音楽プレイヤー
            <br />
            一人ハッカソンで作成．
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/simplayer"
            >
              <i className="fa fa-github" />
            </a>
            simplayer
          </h2>
          <ul className="tag-list">
            <li>Node.js</li>
            <li>powershell</li>
          </ul>
          <p>
            <b>A Sound Player is not required native module. so simple.</b>
            <br />
            ネイティブモジュールが不要なサウンドプレイヤー
            <br />
            openerにインスパイアされて実装
            <br />
            Windows環境ではNode.jsから，powershellを利用
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/nyaovim-nicolive-comment-viewer"
            >
              <i className="fa fa-github" />
            </a>
            nyaovim-nicolive-comment-viewer
          </h2>
          <ul className="tag-list">
            <li>javascript</li>
            <li>Polymer</li>
            <li>Vim script</li>
          </ul>
          <p>
            <b>nicolive comment viewer on Nyaovim.</b>
            <br />
            ニコニコ生放送用，コメントビュアーをNayoVim上から扱えるように
            <br />
            一人ハッカソンで作成
          </p>
        </div>
        <div className="card">
          <h2>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MaxMEllon/comelon"
            >
              <i className="fa fa-github" />
            </a>
            comelon
          </h2>
          <ul className="tag-list">
            <li>javascript</li>
            <li>electron</li>
            <li>React.js</li>
            <li>mocha</li>
          <li>nightmare(v2)</li>
          <li>flux</li>
        </ul>
        <p>
          <b>ニコニコ生放送用，コメントビュアー</b>
          <br />
          JavaScript, React.js を初めて扱って開発し完成させたもの
          <br />
          このアプリケーションを通してJavaScriptの基本的なことを学んだ
          <br />
          アーキテクトパターンであるFluxを採用
        </p>
      </div>
      <div className="card">
        <h2>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MaxMEllon/vim-tmng"
          >
            <i className="fa fa-github" />
          </a>
          vim-tmng
        </h2>
        <ul className="tag-list">
          <li>Vim script</li>
          <li>Vim plugin</li>
        </ul>
        <p>
          <b>tmng format to highlight for vim</b>
          <br />
          研究室の特殊なドキュメント形式をハイライトするためのplugin
        </p>
      </div>
      <div className="card">
        <h2>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MaxMEllon/AigisCapture"
          >
            <i className="fa fa-github" />
          </a>
          AigisCapture
        </h2>
        <ul className="tag-list">
          <li>.NETFramework 4.5.1</li>
          <li>WPF</li>
        <li>C# (6.0)</li>
        <li>XAML</li>
        <li>OpenCV</li>
      </ul>
      <p>
        <b>千年戦争アイギスの画面のスクリーンショットを素早く取るためのアプリケーション</b>
        <br />
        友人に依頼されて作成
      </p>
    </div>
    <div className="card">
      <h2>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MaxMEllon/LivenPepper"
        >
          <i className="fa fa-github" />
        </a>
        LivenPepper
      </h2>
      <ul className="tag-list">
        <li>Pepper</li>
      <li>Python (2.7)</li>
    </ul>
    <p>
      <b>Mushup in Osaka 2015 作品</b>
      <br />
      企業賞(DataSpider賞)受賞 本戦:棄権
    </p>
  </div>
  <div className="card">
    <h2>
      <div className="empty" />
      顔認証可能，簡易加工可能，汎用画像WebAPI (private)
    </h2>
    <ul className="tag-list">
      <li>Laravel</li>
      <li>php</li>
    </ul>
    <p>
      インターンシップで開発
    </p>
  </div>
  <div className="card">
    <h2>
      <div className="empty" />
      maxmellon.github.io
    </h2>
    <ul className="tag-list">
      <li>React.js</li>
      <li>CSS3</li>
    </ul>
    <p>
      CSSフレームワークを使わずにデザイン
    </p>
  </div>
</div>
    );
  }
}
