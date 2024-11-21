import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/DataContext";
import "./cart.css"
import React from 'react'
import Productos from "../productos/Productos";
import BACKEND from "../../config";

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
    
    // Actualizar en el backend
    const userId = 1; // Obtenlo según la lógica de autenticación
    fetch(`${BACKEND}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, items: [{ productId: id, quantity: 1 }] })
    })
    .catch(error => console.error('Error actualizando el carrito en el backend:', error));
}

  function restarUnaUnidad(id) {
    const newCart = myCart
        .map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        })
        .filter(product => product.quantity > 0);
    actualizarCarrito(newCart);

    // Actualizar en el backend
    const userId = 1; // Obtenlo según la lógica de autenticación
    fetch(`${BACKEND}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, items: [{ productId: id, quantity: -1 }] })
    })
    .catch(error => console.error('Error actualizando el carrito en el backend:', error));
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