import React, { Component } from 'react';

const Activities = () => {
  return (
    <div className="activities">
      <h1 className="title">
        <i className="fa fa-child" /> Activities
      </h1>
      <hr className="border-line" />
      <table className="activity-list">
        <tbody>
          <tr>
            <th colSpan="3">
              2012
            </th>
          </tr>
          <tr>
            <td className="link" />
            <td>
              全日本合唱コンクール香川県大会
            </td>
            <td className="detail">
              テノールセカンド 金賞
            </td>
          </tr>
          <tr>
            <td className="link" />
            <td>
              全日本合唱コンクール四国大会
            </td>
            <td className="detail">
              テノールセカンド 金賞 (ダメ金)
            </td>
          </tr>
          <tr>
            <th colSpan="3">
              2013
            </th>
          </tr>
          <tr>
            <td className="link" />
            <td>
              ETロボコン2013 中四国地区
            </td>
            <td className="detail">
モデル部門4位 競技部門9位 総合6位
            </td>
          </tr>
          <tr>
            <td className="link">
              <a
                className="link"
                target="_blank"
                href="http://icpc.iisf.or.jp/domestic/2013d/"
              >
                <i className="fa fa-external-link" />
              </a>
            </td>
            <td>
              ACM-ICPC2013
            </td>
            <td className="detail" />
          </tr>
          <tr>
            <td className="link" />
            <td>
              株式会社アフレル冬期インターン
              <br />
            </td>
            <td className="detail">
              <em>
                実務:30日間
                <br />
                LEGO/EV3を用いたJava言語教育支援 教科書を作成
              </em>
            </td>
          </tr>
          <tr>
            <th colSpan="3">
              2014
            </th>
          </tr>
          <tr>
            <td className="link" />
            <td> 自主休学 </td>
            <td className="detail" />
          </tr>
          <tr>
            <th colSpan="3">
              2015
            </th>
          </tr>
          <tr>
            <td className="link" >
              <a
                className="link"
                target="_blank"
                href="http://icpc.iisf.or.jp/2015-tsukuba/?lang=ja"
              >
                <i className="fa fa-external-link" />
              </a>
            </td>
            <td>
              ACM-ICPC2015
            </td>
            <td className="detail" />
          </tr>
          <tr>
            <td className="link" >
              <a
                className="link"
                target="_blank"
                href="http://recruit-jinji.jp/summer-internship2015/"
              >
                <i className="fa fa-external-link" />
              </a>
            </td>
            <td>
              株式会社リクルートホールディングス
              <br />
              サマーインターン2015
            </td>
            <td className="detail">
              <em>
                実務:20日間
                <br />
                顔認証可能な画像蓄積WebAPI構築
              </em>
            </td>
          </tr>
          <tr>
            <td className="link">
              <a
                className="link"
                target="_blank"
                href="https://github.com/MaxMEllon/LivenPepper"
              >
                <i className="fa fa-external-link" />
              </a>
            </td>
            <td>
              Mashup Awards 11 予選大阪 #MA11
            </td>
            <td className="detail">
              企業賞(DataSpider賞)受賞 本戦:棄権
            </td>
          </tr>
          <tr>
            <td className="link" />
            <td>
              9947-CTF-2015
            </td>
            <td className="detail" />
          </tr>
          <tr>
            <td className="link">
              <a
                className="link"
                target="_blank"
                href="http://ce.eplang.jp/index.php?132%B2%F3%B8%A6%B5%E6%C8%AF%C9%BD%B2%F1"
              >
                <i className="fa fa-external-link" />
              </a>
            </td>
            <td>
              第132回CE・第17回CLE合同研究発表会
            </td>
            <td className="detail">
              CE学生セッション
            </td>
          </tr>
          <tr>
            <th colSpan="3">
              2016
            </th>
          </tr>
          <tr>
            <td className="link" />
            <td>
              ピクシブ株式会社 選考インターン
            </td>
            <td className="detail">
              実務:5日間
            </td>
          </tr>
          <tr>
            <td className="link" />
            <td>
              ISUCON6
            </td>
            <td className="detail">
            </td>
          </tr>
        </tbody>
      </table>
      <h2>最多コミットストリーク</h2>
      <div className="cover">
        <img
          src="./img/github-streak.png"
          alt="github"
        />
      </div>
      <h2>wakatime ウィークリー 開発時間ランキング1位</h2>
      <div className="cover">
        <img
          src="./img/waka-ranking.png"
          alt="github"
        />
      </div>
    </div>
  );
};

export default Activities;
