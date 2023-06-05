import React from "react";
import "./giftmap.scss";
import gift from "../../assets/gift.svg";
import map from "../../assets/map.svg";

export const GiftMap = () => {
  return (
    <div className="gift-map">
      <img className="image-text" alt="gift" src={gift} />
      <table className="gift-text">
        <tr>
          <td className="title">ALIAS:</td>
          <td className="content">CASAMIENTOFLORYCAMI</td>
        </tr>
        <tr>
          <td className="title">CBU:</td>
          <td className="content">0070999030004057876282</td>
        </tr>
      </table>
      <img className="image-text" alt="map" src={map} />
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.489768495387!2d-58.83260282399329!3d-34.61706155820344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc91849a289ce9%3A0x3fa024129ff40d5b!2sMansi%C3%B3n%20del%20lago!5e0!3m2!1ses-419!2sar!4v1680734398806!5m2!1ses-419!2sar"
        width="300"
        height="200"
        style={{ border: 0, borderRadius: 15 }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Mapa al salon"
      ></iframe>
    </div>
  );
};
