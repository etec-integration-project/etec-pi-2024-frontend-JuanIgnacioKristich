import React, { useEffect, useState } from 'react';
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import BACKEND from '../../config';
import axios from "axios";

const Cart = () => {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem('productos')) || [];
    setMyCart(carrito);
  }, []);

  const handleCart = async () => {
    if (myCart.length > 0) {
      try {
        // Enviar el carrito al backend con los productos y cantidades
        const response = await axios.post(`${BACKEND}/buy`, { cartItems: myCart });

        // Verificar la respuesta del servidor
        if (response.status === 200) {
          alert('Artículos comprados con éxito');
          setMyCart([]); // Limpiar el carrito después de la compra
          localStorage.removeItem('productos'); // Limpiar el localStorage
        }
      } catch (err) {
        alert('Error al realizar la compra');
        console.log("Error al registrar carrito: ", err);
      }
    } else {
      alert('Selecciona artículos antes de realizar la compra');
    }
  };

  return myCart.length > 0 ? (
    <>
      <CartElements />
      <CartTotal />
      <button className="mainBtn" onClick={handleCart}>Comprar</button>
    </>
  ) : (
    <h2 className="cart-message-center">El carrito está vacío</h2>
  );
};

export default Cart;
