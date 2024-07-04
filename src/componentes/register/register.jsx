

import React, { useState } from "react";
import "./register.css";
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function Register() {
  const [firstname, nombre]=useState("")
  const [Password, contraseña] =useState("")
  const [Email, correoElectronico]=useState("")
  const [repeatPassword, repetirContraseña] =useState("")
  const registro = async (e) =>{
    e.preventDefault()
    if (Password === repeatPassword){
      try {
        await axios.post("http://localhost:3000/api/users",{Email,Password,firstname})
        alert("cuenta creada exitosamente")
        window.location.href= "http://localhost:3001/login"

      } catch (error) {
        alert("no se pudo crear la cuenta")
        
      }

      
    }
    else{
      alert("las contraseñas no son iguales")
    }
    
  }

  return (
    <div className="login-container">
      <form className="login-form" action="#" method="post">
        <h2>Cree su cuenta</h2>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value ={firstname} onChange={(e) => nombre (e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" value ={Email} onChange={(e) => correoElectronico (e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" name="contrasena" value ={Password} onChange={(e) => contraseña (e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="repetir-contrasena">Repetir Contraseña</label>
          <input
            type="password"
            id="repetir-contrasena"
            name="repetir-contrasena" value ={repeatPassword} onChange={(e) => repetirContraseña (e.target.value)}
            required
          />
        </div>

        <div className ="botoneslogin">
          
          <Link>
            <button type="submit" onClick = {registro}>Crear cuenta </button>
          
          </Link>


        </div>
        
        
      </form>
    </div>
  );
}



