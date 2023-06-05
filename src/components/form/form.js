import React, { useRef, useState } from "react";
import "./form.scss";
import confirmarasistencia from "../../assets/confirmarasistencia.svg";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sgop0bc",
        "template_10z6h3i",
        form.current,
        "P5TiZzqWBYVyLSs5C"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact-form">
      <img
        className="image"
        alt="confirmar asistencia"
        src={confirmarasistencia}
      />
      <form ref={form} className="form" onSubmit={handleSubmit}>
        <label>
          Nombre y apellido:
          <input
            name="name"
            className="input-field"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Cantidad:
          <input
            name="quantity"
            className="input-field"
            type="number"
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            name="phone"
            className="input-field"
            type="tel"
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <br />
        <label>
          ¿Algo que nos quieras decir?
          <textarea
            name="message"
            className="input-field"
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
