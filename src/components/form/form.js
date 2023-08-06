import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.scss";
import confirmarasistencia from "../../assets/confirmarasistencia-v3.svg";
import nombreyapellido from "../../assets/nombreyapellido-v2.svg";
import telefono from "../../assets/telefono-v2.svg";
import aclaracion from "../../assets/aclaracion.svg";
import emailjs from "@emailjs/browser";

const namespace = "contact-form";

export const Form = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [inputValues, setInputValues] = useState([""]);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleAdd = () => {
    setInputValues([...inputValues, ""]);
  };

  const handleRemove = (index) => {
    if (inputValues.length === 1) return;
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
  };

  const handleShowNames = () => {
    setShowNames(true);
  };

  const resetForm = () => {
    setShowNames(false);
    setInputValues([""]);
    setPhone("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValues[0] || !phone) {
      toast.error("Los campos marcados con un * son obligatorios");
      return;
    }

    emailjs
      .sendForm(
        "service_uqtzsuf",
        "template_10z6h3i",
        form.current,
        "PFMEF1avo2swCox_6"
      )
      .then((res) => {
        toast.success("¡Gracias por tu confirmación!", {
          autoClose: 3000,
        });
        setFormSubmitted(true);
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={namespace}>
      <img
        className="image"
        alt="confirmar asistencia"
        src={confirmarasistencia}
      />
      <form
        ref={form}
        className={`${namespace}__form ${
          !formSubmitted && namespace
        }__form-submitted`}
        onSubmit={handleSubmit}
      >
        <img
          className="image label"
          alt="nombre y apellido"
          src={nombreyapellido}
        />
        <input
          name="name"
          className="input-field"
          type="text"
          value={inputValues[0]}
          onChange={(e) => handleChange(0, e.target.value)}
        />

        {showNames && (
          <>
            {inputValues.slice(1).map((value, index) => (
              <div className="invitado-container" key={index}>
                <input
                  name="name"
                  className="invitado"
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(index + 1, e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-remove"
                  onClick={() => handleRemove(index + 1)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="btn-container">
              <button type="button" className="btn btn-add" onClick={handleAdd}>
                Agregar
              </button>
            </div>
          </>
        )}
        {!showNames && (
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-add"
              onClick={handleShowNames}
            >
              Agregar
            </button>
          </div>
        )}
        <br />
        <img className="image label" alt="telefono" src={telefono} />
        <input
          name="phone"
          className="input-field"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <img className="image label" alt="aclaracion" src={aclaracion} />
        <textarea
          name="message"
          className="input-field"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <br />
        {formSubmitted ? (
          <button type="button" className="btn btn-submitted">
            ¡Gracias por tu confirmación!
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-submit"
            disabled={formSubmitted}
          >
            Enviar
          </button>
        )}
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};
