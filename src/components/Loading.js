import React from "react";
import "../styles/loading.scss";
import uniqid from "uniqid";

export const waveElements = (total = 0) => {
  let waveElementsList = [];
  for(let container = 0; container < total; container++){
       waveElementsList.push(<div key={uniqid()} className="wave"></div>);
  }

  return waveElementsList;
}

const Loading = (props) => {
  const { totalWaves = 0 } = props;
  const MAX_WAVES_ALLOWED = 10;
  const waves = totalWaves <= 10 ? totalWaves : MAX_WAVES_ALLOWED;

  return (
    <div className="loading-wrapper">
      <div className="waves-wrapper">
          {waveElements(waves)}
      </div>
      <p className="loading-message">Loading</p>
    </div>
  );
};

export default Loading;
