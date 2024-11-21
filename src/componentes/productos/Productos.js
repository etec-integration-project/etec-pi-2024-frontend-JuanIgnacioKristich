import { useContext } from 'react';
import { dataContext } from '../context/DataContext'; 
import "./Productos.css";// Asegúrate de que la ruta es correcta
// import BACKEND from '../../config';
import BACKEND from '../../config';

export const Productos = () => {
    const { data, cart, setCart } = useContext(dataContext); 

    // Función para manejar la compra de productos
    // const buyProducts = async (producto) => {
    //     try {
    //         // 1. Enviar el producto al backend
    //         const response = await fetch(`${BACKEND}/cart/add`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 userId: 1, // Reemplaza con el userId del usuario actual
    //                 productIds: [producto.id], // Enviar el ID del producto
    //             }),
    //         });

    //         // 2. Verificar si la respuesta fue exitosa
    //         if (response.ok) {
    //             // 3. Si la compra fue exitosa, actualizar el carrito en el frontend
    //             console.log('Producto agregado al carrito:', producto);
    //             setCart([...cart, producto]); // Actualiza el carrito localmente
    //         } else {
    //             console.error('Error al agregar el producto al carrito');
    //         }
    //     } catch (error) {
    //         console.error('Hubo un error al intentar agregar el producto al carrito:', error);
    //     }
    // }

    function añadirAlCarrito(producto) {
      console.log(producto, 'añadido');
      
      let cart = JSON.parse(localStorage.getItem('productos')) || [];
      if (cart.some(p => p.id === producto.id)) {
          cart.forEach(p => {
              if (p.id === producto.id) {
                  p.quantity++;
              }
          });
      } else {
          cart.push({
              id: producto.id,
              name: producto.firstname,
              price: producto.Price,
              img: producto.img,
              quantity: 1
          });
      }
      localStorage.setItem('productos', JSON.stringify(cart));
      
      // Enviar datos al backend
      const userId = 1; // Deberías obtener este valor según la lógica de autenticación
      const items = [{ productId: producto.id, quantity: 1 }];
      fetch(`${BACKEND}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, items })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Products added to cart') {
            console.log('Producto agregado al carrito en el backend:', data);
        } else {
            console.error('Error al agregar el producto al carrito en el backend:', data.message);
        }
    })
    .catch(error => {
        console.error('Hubo un error al intentar agregar el producto al carrito en el backend:', error);
    });
}
    
    return (
        <div className="Producto1">
            {data.map((producto) => {
                return (
                    <div className="card" key={producto.id}>
                        <img src={producto.img} alt="img-producto-card" />
                        <h3 className="Producto-estilo">{producto.firstname}</h3>
                        <h4 className="Producto-estilo">{producto.Price}$</h4>
                        <button className="buy-button" onClick={() => añadirAlCarrito(producto)}>Buy</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Productos;
