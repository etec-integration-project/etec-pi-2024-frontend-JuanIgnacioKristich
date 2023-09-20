import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import "./cart.css"
import React from 'react'
import Productos from "../productos/Productos";

function CartElements() {
    const { cart, setCart } = useContext(dataContext); 
    const deleteProduct = (id) => { 

      const borrarcarro = cart.filter(Productos => Productos.id !== id)
      setCart (borrarcarro);

     }
  return cart.map((Productos)=>{
    return(
        <div className='cartContent' key={Productos.id}>
            <img src={Productos.img} alt='product-card' />
            <h3 className='name'>{Productos.name}</h3>
            {/* <CartItemCounter product={Productos} /> */}
            <h4 className='price'>{Productos.price}$</h4>
             <button class='cart-delete-button' onClick={() => deleteProduct(Productos.id)}>
            ❌ 
            </button> 
        </div>
    
    )} 
  )
}

export default CartElements