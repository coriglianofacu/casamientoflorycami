import React, { useState } from "react";
import "./form.scss";
import confirmarasistencia from "../../assets/confirmarasistencia.svg";

export const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Lastname: ${name}, Phone: ${phone}, Message: ${message}`);
  };

  return (
    <div className="contact-form">
      <img
        className="image"
        alt="confirmar asistencia"
        src={confirmarasistencia}
      />
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Apellido:
          <input
            className="input-field"
            type="text"
            placeholder="Familia Rodríguez"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            className="input-field"
            type="tel"
            placeholder="1512345678"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <br />
        <label>
          ¿Algo que nos quieras decir?
          <textarea
            className="input-field"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <br />
        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
