import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./cart.css"
import React from 'react'
import Productos from "../Productos/Productos";

function CartElements() {
    const { cart, setCart } = useContext(dataContext);
  return cart.map((Productos)=>{
    return(
        <div className='cartContent' key={Productos.id}>
            <img src={Productos.img} alt='product-card' />
            <h3 className='name'>{Productos.name}</h3>
            {/* <CartItemCounter product={Productos} /> */}
            <h4 className='price'>{Productos.price}$</h4>
            {/* <h3 class='cart-delete-button' onClick={() => deleteProduct(Productos.id)}>
            ❌
            </h3> */}
        </div>
    
    )} 
  )
}

export default CartElements