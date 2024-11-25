import React, { useState } from 'react';
import axios from 'axios';
import BACKEND from '../../config';
import './login.css';

const LoginForm = ({ saveUserSession }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Hacemos la solicitud al backend para el login
      const response = await axios.post(`${BACKEND}/login`, {
        email: email,
        password: password,
      });

      console.log('Respuesta del servidor completa:', response);

      if (response.data && response.data.mensaje === 'ingreso correcto' && response.data.token) {
        const token = response.data.token;

        // Guardamos el token del usuario en localStorage
        console.log('Token recibido correctamente del servidor:', token);
        localStorage.setItem('userToken', token);
        saveUserSession(token);
        alert('Bienvenido');
      } else {
        setError('Error: No se recibió el token esperado. Verifica la consola para más detalles.');
        console.error('Estructura incorrecta en la respuesta:', response.data);
      }
    } catch (error) {
      console.error('Error durante el login:', error);
      setError('Credenciales inválidas. Intenta de nuevo.');
    }
  };

  const handleLogout = () => {
    console.log('Cerrando sesión y limpiando localStorage.');
    localStorage.removeItem('userToken');
    window.location.reload();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Iniciar sesión</button>
          <button onClick={() => window.location.href = '/register'} className="login-button">Registrarse</button>
          <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
          </form>
        </div>
      </div>
  );
};

export default LoginForm;
