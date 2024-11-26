import React, { useState } from 'react';
import axios from 'axios';
import BACKEND from '../../config';

const ContactForm = ({ userSession, cart }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar si todos los campos están llenos
    if (!nombre || !email || !telefono || !mensaje) {
      setError('Por favor, completa todos los campos antes de enviar el formulario');
      return;
    }

    if (!userSession || !userSession.userId) {
      setError('No se pudo encontrar un usuario autenticado. Por favor, inicia sesión.');
      return;
    }

    try {
      // Crear el objeto con los datos del formulario
      const contactoData = {
        nombre,
        email,
        telefono,
        mensaje,
        carrito: cart.map((item) => ({
          nombreProducto: item.name,
          cantidad: item.quantity,
          precioTotal: item.price * item.quantity,
        })),
        userId: userSession.userId,
      };

      // Enviar el formulario al backend
      const response = await axios.post(`${BACKEND}/contact`, contactoData);

      if (response.status === 200) {
        setSuccessMessage('El formulario se envió correctamente. Gracias por contactarnos.');
        setError('');
        setNombre('');
        setEmail('');
        setTelefono('');
        setMensaje('');
      } else {
        setError('Error al enviar el formulario. Intenta nuevamente más tarde.');
      }
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setError('Error al enviar el formulario. Intenta nuevamente más tarde.');
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
