import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.scss";
import confirmarasistencia from "../../assets/confirmarasistencia-v3.svg";
import nombreyapellido from "../../assets/nombreyapellido-v2.svg";
import telefono from "../../assets/telefono-v2.svg";
import aclaracion from "../../assets/aclaracion.svg";
import dance from "../../assets/dance.svg";
import emailjs from "@emailjs/browser";

const namespace = "contact-form";

export const Form = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [names, setNames] = useState([""]);
  const [quantity, setQuantity] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleAdd = () => {
    setNames([...names, ""]);
  };

  const handleRemove = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const handleShowNames = () => {
    setShowNames(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!names[0] || !phone) {
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
          onChange={(event) => handleChange(0, event.target.value)}
        />

        {showNames && (
          <>
            {names.map((name, index) => (
              <div key={index}>
                <input
                  name="name"
                  className="invitado"
                  type="text"
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </div>
            ))}
            <div className="btn-container">
              <button type="button" className="btn btn-add" onClick={handleAdd}>
                Agregar
              </button>
              {names.length > 0 && (
                <button
                  type="button"
                  className="btn btn-remove"
                  onClick={() => handleRemove(names.length - 1)}
                  disabled={names.length === 0}
                >
                  Eliminar
                </button>
              )}
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
        {/* <label>
          Cantidad:
          <input
            name="quantity"
            className="input-field"
            type="number"
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>
        <br /> */}
        <img className="image label" alt="telefono" src={telefono} />
        <input
          name="phone"
          className="input-field"
          type="tel"
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <img className="image label" alt="aclaracion" src={aclaracion} />
        <textarea
          name="message"
          className="input-field"
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
