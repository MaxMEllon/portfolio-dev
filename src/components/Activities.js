import _ from 'lodash';
import React from 'react';

const renderActivity = (activitiesByYears, selectedYear) => (
  activitiesByYears[selectedYear].map(activity => (
    <tr key={activity.title}>
      <td className="link">
        {(() => {
          if (_.isEmpty(activity.link)) return null;
          return (
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href={activity.link}
            >
              <i className="fa fa-external-link" />
            </a>
          );
        })()}
      </td>
      <td>{activity.title}</td>
      <td className="detail">{activity.detail}</td>
    </tr>
  )
));

const renderYears = (activitiesByYears, years) => (
  years.map(year => (
    <div key={year}>
      <tr>
        <td className="year" colSpan="3">
          {year}
        </td>
      </tr>
      {renderActivity(activitiesByYears, year)}
    </div>
  )
));

const Activities = ({ activities }) => {
  if (_.isEmpty(activities)) return null;
  const activitiesByYears = _.groupBy(activities, e => e.year);
  const years = _.keys(activitiesByYears);
  return (
    <div className="activities">
      <h1 className="title">
        <i className="fa fa-child" /> Activities
      </h1>
      <hr className="border-line" />
      <table className="activity-list">
        <tbody>
          {renderYears(activitiesByYears, years)}
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
