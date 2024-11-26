// import { useEffect, useState } from "react";

// const CartTotal = () => {
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const carrito = JSON.parse(localStorage.getItem('productos')) || [];
//     const total = carrito.reduce((acc, el) => acc + el.price * el.quantity, 0);
//     setTotal(total);
//   }, []);

//   return <div className="cartTotal">
//       <h3>total a pagar: {total}$</h3>
//   </div>
// }

// export default CartTotal;

import { useEffect, useState } from "react";

const CartTotal = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const carrito = JSON.parse(localStorage.getItem('productos')) || [];
      const newTotal = carrito.reduce((acc, el) => acc + (el.price * (el.quantity || 1)), 0);
      setTotal(newTotal);
    };

    // Calcula el total al montar el componente
    calculateTotal();

    // Añade un event listener para cambios en el localStorage (en caso de que cambie el carrito)
    window.addEventListener('storage', calculateTotal);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('storage', calculateTotal);
    };
  }, []);

  return (
    <div className="cartTotal">
      <h3>Total a pagar: {total}$</h3>
    </div>
  );
}

export default CartTotal;
