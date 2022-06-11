import React from "react";
import "../styles/loading.scss";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="waves-wrapper">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <p className="loading-message">Loading</p>
    </div>
  );
};

export default Loading;
