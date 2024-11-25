import React, { useState } from "react";
import "./register.css";
import axios from 'axios';
import BACKEND from "../../config";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const registro = async (e) => {
    e.preventDefault();
    if (Password === repeatPassword) {
      try {
        await axios.post(`${BACKEND}/users`, { Email, Password, firstname });
        alert("Cuenta creada exitosamente");
        window.location.href = `/login`;
      } catch (error) {
        alert("No se pudo crear la cuenta");
      }
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Cree su cuenta</h2>
        <form className="register-form" onSubmit={registro}>
          <div className="input-container">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="repetir-contrasena">Repetir Contraseña</label>
            <input
              type="password"
              id="repetir-contrasena"
              name="repetir-contrasena"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
}
