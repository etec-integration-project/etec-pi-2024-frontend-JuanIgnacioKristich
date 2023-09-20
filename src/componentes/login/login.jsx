import "./login.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginForm() {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor para la validación en el back-end
    console.log('Datos de inicio de sesión:', formData);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="usernameOrEmail">Nombre de Usuario o Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={toggleShowPassword}>
            Mostrar Contraseña
          </button>
        </div>
        <Link to="/">
        <button type="submit">Iniciar Sesión</button>
        </Link>
        
      </form>
      <p>
        ¿No tienes una cuenta?{' '}
        <Link to="/Register">Regístrate aquí</Link>
      </p>
    </div>
  );
}

export default LoginForm;
