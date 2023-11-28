import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./register.css";






function LoginForm() {
  const [formData, setFormData] = useState({
    users: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    
  });


  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // Aquí puedes realizar la acción de inicio de sesión
      console.log('Iniciar sesión con:', formData);
    } else {
      setPasswordMatch(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='contenedor-register' >
      <h2>Registrate</h2>
      <div className="form-register-css">
        <form className='form-register' onSubmit={handleSubmit}>
          <div className="conteiner-form-register">
            <label>Nombre de Usuario:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="conteiner-form-register">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="conteiner-form-register">
            <label>Contraseña:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="conteiner-form-register">
            <label>Confirmar Contraseña:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
            </button>
          </div>
          {!passwordMatch && (
            <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>
          )}
          <div className="conteiner-form-register">
            <label>Dirección:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

           <button type="submit"  > Submit</button> {/*?  {passwordMatch && (
           <Link to="/">
             <button type="submit"  > Submit</button> 
           </Link>
          )} */}

         

          <button type="reset">Resetear</button>
        </form>
        <p>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/Login" >inicia secion aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;