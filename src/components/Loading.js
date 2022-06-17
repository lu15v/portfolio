import React from "react";
import "../styles/loading.scss";
import uniqid from "uniqid";

const Loading = (props) => {
  const { totalContainers = 0 } = props;
  const MAX_CONTAINERS_TOTAL = 10;
  const restrictedContainersTotal = totalContainers <= 10 ? totalContainers : MAX_CONTAINERS_TOTAL;

  const waveElements = (total = 0) => {
    let waveElementsList = [];
    for(let container = 0; container < total; container++){
         waveElementsList.push(<div key={uniqid()} className="wave"></div>);
    }

    return waveElementsList;
  }
  return (
    <div className="loading-wrapper">
      <div className="waves-wrapper">
          {waveElements(restrictedContainersTotal)}
      </div>
      <p className="loading-message">Loading</p>
    </div>
  );
};

export default Loading;
