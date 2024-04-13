import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import { mode as savedMode } from "../util/recoil-atoms";
import { useRecoilValue } from "recoil";
import { pictureLoaded } from "../util/pictureloaded";
import Project from "./Project";
import ProjectWithoutPicture from "./ProjectWithoutPicture";

const ProjectContainer = (props) => {
  const { name, background, history, projectN, loaded } = props;

  const [isHovering, setIsHovering] = useState();
  const [loadingError, setLoadingError] = useState(false);
  const isPictureLoaded = useRef(loaded);

  useEffect(() => {
    pictureLoaded(background)
      .then((response) => {
        isPictureLoaded.current = response;
        setLoadingError(false);
      })
      .catch(() => {
        isPictureLoaded.current = false;
        setLoadingError(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mode = useRecoilValue(savedMode);

  const validName = name || "Unknown";

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleOnClick = () => {
    history.push(`/${name.replaceAll(" ", "_")}/${projectN}`);
  };

  if (!loadingError) {
    return (
      <Project
        name={validName}
        background={background}
        hovering={isHovering}
        mode={mode}
        handleMouseOut={handleMouseOut}
        handleMouseOver={handleMouseOver}
        handleOnClick={handleOnClick}
      />
    );
  } else {
    return (
      <ProjectWithoutPicture
        name={validName}
        mode={mode}
        handleOnClick={handleOnClick}
      />
    );
  }
};

export default withRouter(ProjectContainer);
