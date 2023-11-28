import React, { useContext } from 'react'
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import { Link } from 'react-router-dom';
import { dataContext } from '../context/DataContext';


const Cart = () => {

  const {cart} = useContext(dataContext)


  return cart.length > 0 ? (<>
  <CartElements/>
  <CartTotal/>
  </>): (
    <h2 className='cart-massage-center'>El carrito esta vacio</h2>
  )
};

export default Cart