import React, { useContext, useState } from 'react'
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import { Link } from 'react-router-dom';
import { dataContext } from '../context/DataContext';
import axios from "axios"

const Cart = () => {

  const {cart} = useContext(dataContext)


    const [cartItems, setCartItems] = useState([]);

  const filteredCart = Object.values(cartItems).map(({ id, quantity }) => ({ id, quantity }));

  const jsonifiedCart = JSON.stringify(filteredCart);

  const handleCart = async () => {
      if (jsonifiedCart !== "[]") {
          try {
              await axios.post('http://localhost:3000/api/cart', {jsonifiedCart});
  
              alert('Articulos comprados con exito');
          } catch (err) {
              alert('Error al realizar la compra');
              console.log("Error al registrar carrito: ", err)
          }    
      } else {
          alert('Seleccionar articulos antes de realizar la compra');
      }
  };

  return cart.length > 0 ? (<>
  <CartElements/>
  <CartTotal/>
  
  <button className="mainBtn" onClick={handleCart}>Comprar</button>


  
  </>): (
    <h2 className='cart-massage-center'>El carrito esta vacio</h2>
  )
};

export default Cart