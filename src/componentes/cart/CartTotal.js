import { useEffect, useState } from "react";

const CartTotal = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem('productos')) || [];
    const total = carrito.reduce((acc, el) => acc + el.price * el.quantity, 0);
    setTotal(total);
  }, []);

  return <div className="cartTotal">
      <h3>total a pagar: {total}$</h3>
  </div>
}

export default CartTotal;