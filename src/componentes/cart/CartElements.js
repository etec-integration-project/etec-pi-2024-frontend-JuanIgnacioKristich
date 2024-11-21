import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/DataContext";
import "./cart.css"
import React from 'react'
import Productos from "../productos/Productos";

function CartElements() {

  const [myCart, setMyCart] = useState([])

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem('productos'))
    setMyCart(carrito)
  }, [])

  function actualizarCarrito(newCart) {
    setMyCart(newCart);
    localStorage.setItem('productos', JSON.stringify(newCart));
  }

  function añadirUnaUnidad(id) {
    const newCart = myCart.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    actualizarCarrito(newCart);
  }

  function restarUnaUnidad(id) {
    const newCart = myCart
      .map(product => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter(product => product.quantity > 0); // Elimina productos con cantidad 0
    actualizarCarrito(newCart);
  }

  function eliminarProducto(id) {
    const newCart = myCart.filter(product => product.id !== id);
    actualizarCarrito(newCart);
  }

  return myCart.map((Productos) => {
    return (
      <div className='cartContent' key={Productos.id}>
        <img src={Productos.img} alt='product-card' />
        <h3 className='name'>{Productos.name}</h3>
        {/* <CartItemCounter product={Productos} /> */}
        <h4 className='price'>{Productos.price}$</h4>
        <button class='cart-delete-button' onClick={() => eliminarProducto(Productos.id)}>
          ❌
        </button>
        <button onClick={() => añadirUnaUnidad(Productos.id)}>+1</button>
        <button onClick={() => restarUnaUnidad(Productos.id)}>-1</button>
      </div>

    )
  }
  )
}

export default CartElements