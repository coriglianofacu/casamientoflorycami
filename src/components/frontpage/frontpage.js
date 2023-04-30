import React, { useRef } from "react";
import "./frontpage.scss";
import florycami from "../../assets/florycami.svg";
import date from "../../assets/date.svg";

export const Frontpage = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const width = windowSize.current[0];
  const height = windowSize.current[1];

  return (
    <div
      className="frontpage"
      style={{ height: height - 135, width: width - 20 }}
    >
      <img className="date" alt='18 de noviembre' src={date}/>
      <img className="florycami" alt='Flor y Cami' src={florycami} />
    </div>
  );
};
