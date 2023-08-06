import React, { useRef } from "react";
import "./frontpage.scss";
import florycami from "../../assets/florycami-v3.svg";
import nov from "../../assets/nov.svg";
import date from "../../assets/18.svg";

export const Frontpage = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const width = windowSize.current[0];
  const height = windowSize.current[1];

  return (
    <div
      className="frontpage"
      style={{ height: height - 135, width: width - 20 }}
    >
      <div className="date">
        <img className="month" alt="18 de noviembre" src={nov} />
        <img className="day" alt="18 de noviembre" src={date} />
      </div>
      <img className="florycami" alt="Flor y Cami" src={florycami} />
    </div>
  );
};
