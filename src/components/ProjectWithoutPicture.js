import React from "react";

import "../styles/project.scss";

const ProjectWithoutPicture = (props) => {
  const { name, mode, handleOnClick } = props;

  return (
    <div className={`${mode} item`} onClick={handleOnClick}>
      <div className="hover-wrapper-item showUp">
        <div className="hover-content">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectWithoutPicture;
