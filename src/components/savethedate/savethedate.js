import React, { useRef } from "react";
import "./savethedate.scss";
import savethedate from "../../assets/savethedate-v4.svg";
import place from "../../assets/mansiondellago-v3.svg";
import mansion from "../../assets/mansion.svg";

export const SaveTheDate = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const width = windowSize.current[0];
  const height = windowSize.current[1];

  return (
    <div
      className="savethedate"
      style={{ height: height - 135, width: width - 20 }}
    >
      <img className="date" alt='save the date' src={savethedate}/>
      <img className="place" alt='mansión del lago' src={place}/>
      <img className="mansion" alt='mansión' src={mansion}/>
    </div>
  );
};
