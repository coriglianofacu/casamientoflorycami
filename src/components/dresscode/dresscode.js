import React, { useRef } from "react";
import "./dresscode.scss";
import text from "../../assets/dresscode-text-v3.svg";
import image from "../../assets/dresscode-image-v3.svg";

export const DressCode = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const width = windowSize.current[0];
  const height = windowSize.current[1];

  return (
    <div
      className="dresscode"
      style={{ height: height - 135, width: width - 20 }}
    >
      <img className="dresscodetext" alt='elegante sport' src={text}/>
      <img className="dresscodeimage" alt='' src={image}/>
    </div>
  );
};
