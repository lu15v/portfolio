import React from "react";

import "../styles/project.scss";

const Project = (props) => {
  const {
    name,
    background,
    mode,
    hovering,
    handleMouseOut,
    handleMouseOver,
    handleOnClick,
  } = props;

  return (
    <div
      className={`${mode} item`}
      style={{ backgroundImage: `url(${background})` }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleOnClick}
    >
      <div
        className={
          hovering ? "hover-wrapper-item showUp" : "hover-wrapper-item"
        }
      >
        <div className="hover-content">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
