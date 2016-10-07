import React, { Component } from 'react';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="articles">
        <h1 className="title">
          <i className="fa fa-file-text-o" /> Articles
        </h1>
        <hr className="border-line" />
        <table className="article-list">
          <tbody>
            <tr className="head">
              <td className="label">はてなブログ</td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://blog.aqutras.com/entry/2016/06/23/210000">
                  <i className="fa fa-external-link" />
                </a>
Reactの再レンダリングをなるべく減らす
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://blog.aqutras.com/entry/2016/06/09/210000">
                  <i className="fa fa-external-link" />
                </a>
Reactコンポーネントが無駄に再レンダリングされていないか調べる
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://maxmellon.hateblo.jp/entry/2016/08/17/014015">
                  <i className="fa fa-external-link" />
                </a>
                React 用 の Slider UI plugin つくりました
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://maxmellon.hateblo.jp/entry/2016/04/19/024430">
                  <i className="fa fa-external-link" />
                </a>
                EventEmitter Speed BATTLE!!!!
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://maxmellon.hateblo.jp/entry/2016/04/05/153954">
                  <i className="fa fa-external-link" />
                </a>
 ネイティブモジュール非依存のマルチプラットフォームで音を鳴らすことのできるnode-moudleを作った
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://blog.aqutras.com/entry/2016/08/10/210000">
                  <i className="fa fa-external-link" />
                </a>
cordovaアプリをCircleCI上でe2eテストする
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://maxmellon.hateblo.jp/entry/2015/12/16/145808">
                  <i className="fa fa-external-link" />
                </a>
オレオレテキストドキュメント用プラグイン vim-tmngつくった
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://maxmellon.hateblo.jp/entry/2015/12/11/133136">
                  <i className="fa fa-external-link" />
                </a>
人類はもっとvim本来の機能を使うべきだった
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://blog.aqutras.com/entry/2016/05/26/210000">
                  <i className="fa fa-external-link" />
                </a>
Array.prototype.forEach ではなく _.forEach を使う理由
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://blog.aqutras.com/entry/2016/05/12/210000">
                  <i className="fa fa-external-link" />
                </a>
もっさりしたzshを改善する方法
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://blog.aqutras.com/entry/2016/04/28/210000">
                  <i className="fa fa-external-link" />
                </a>
JavaScriptのコード補完できていますか？
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://blog.aqutras.com/entry/2016/04/11/210000">
                  <i className="fa fa-external-link" />
                </a>
開発をちょっと楽にする、nodeモジュール紹介
              </td>
            </tr>
            <br />
            <tr className="head">
              <td className="label">キータ</td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/ca51fdd789f1a71597b6">
                  <i className="fa fa-external-link" />
                </a>
npm install を高速化するpnpmの使い方と注意事項
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/320af55d3a041c7bfc33">
                  <i className="fa fa-external-link" />
                </a>
MacVimでFiraCode使う
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/8b3f0d65668802a8c446">
                  <i className="fa fa-external-link" />
                </a>
npm i battle [ npm vs pnpm vs ied ]
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/1c814f7f1fe9c785a3c2">
                  <i className="fa fa-external-link" />
                </a>
coffee の存在確認演算子 '?' が便利だったのでbabelにも取り込む
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/0e6173cdd51843053839">
                  <i className="fa fa-external-link" />
                </a>
vimのECMASCript2015環境をイイ感じにする
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/23325c22581e9187639e">
                  <i className="fa fa-external-link" />
                </a>
zshでzの結果をpecoって爆速でディレクトリ移動する
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/08c8162f3769ce71dbd3">
                  <i className="fa fa-external-link" />
                </a>
gulpを用いてplantUMLの生成自動化
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/381ebe0c3256deb0b62e">
                  <i className="fa fa-external-link" />
                </a>
ruby製templateエンジンのslimに対して文法チェックするslim-lint
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/f75861f104b8c1e3ead0">
                  <i className="fa fa-external-link" />
                </a>
vim で jsx を "綺麗に" ハイライトする
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/1d1f341543242f091851">
                  <i className="fa fa-external-link" />
                </a>
Nyaovim上で動く ニコ生のコメビュを作ってみた
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/afe7497ef3b4976ee87d">
                  <i className="fa fa-external-link" />
                </a>
Nativeモジュール非依存な音声再生nodeモジュールを作った
              </td>
            </tr>
            <tr>
              <td className="content">
                <a className="link" href="http://qiita.com/maxmellon/items/ab4399b7a4f938272395">
                  <i className="fa fa-external-link" />
                </a>
remoteのmasterにpushするとき, y/n を尋ねる
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
