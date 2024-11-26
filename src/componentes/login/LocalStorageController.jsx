
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import BACKEND from '../../config';

// const LocalStorageController = () => {
//   console.log('LocalStorageController montado.');
//   const [userSession, setUserSession] = useState(null);
//   const [cart, setCart] = useState([]);

//   // Initialize data from localStorage when the component mounts
//   useEffect(() => {
//     console.log('Inicializando datos desde localStorage...');
//     const storedToken = localStorage.getItem('userToken');
//     const storedUserId = localStorage.getItem('userId');
//     if (storedToken && storedUserId) {
//       console.log('Token y userId de sesión encontrados en localStorage:', storedToken, storedUserId);
//       setUserSession({ token: storedToken, userId: storedUserId });
//       const storedCart = localStorage.getItem(`cart_${storedUserId}`);
//       if (storedCart) {
//         console.log('Datos del carrito encontrados en localStorage para el userId:', storedUserId);
//         const parsedCart = JSON.parse(storedCart);
//         setCart(parsedCart);
//       } else {
//         console.warn('No se encontraron productos en el localStorage para el userId:', storedUserId);
//       }
//     } else {
//       console.warn('No se encontraron token o userId de sesión en el localStorage.');
//     }
//   }, []);

//   // Save user session to localStorage whenever it changes
//   useEffect(() => {
//     if (userSession && userSession.token && userSession.userId) {
//       console.log('Guardando token y userId de sesión en localStorage...');
//       localStorage.setItem('userToken', userSession.token);
//       localStorage.setItem('userId', userSession.userId);
//     }
//   }, [userSession]);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     if (userSession && userSession.token && userSession.userId) {
//       console.log('Guardando datos del carrito en localStorage...');
//       if (cart.length > 0) {
//         console.log('Guardando carrito en localStorage para el userId:', userSession.userId);
//         localStorage.setItem(`cart_${userSession.userId}`, JSON.stringify(cart));
//       } else {
//         console.log('El carrito está vacío, eliminando del localStorage para el userId:', userSession.userId);
//         localStorage.removeItem(`cart_${userSession.userId}`);
//       }
//     }
//   }, [cart, userSession]);

//   // Function to save user session after successful login
//   const saveUserSession = async (email, password) => {
//     try {
//       console.log('Iniciando sesión con:', { email, password });
//       // Request to validate user credentials and get a token
//       const response = await axios.post(`${BACKEND}/login`, { email, password });
//       if (response.status === 200 && response.data.token && response.data.userId) {
//         const { token, userId } = response.data;
//         console.log('Guardando token y userId de sesión en localStorage:', token, userId);
//         localStorage.setItem('userToken', token);
//         localStorage.setItem('userId', userId);
//         setUserSession({ token, userId });
//         // Initialize the user's cart after login
//         const storedCart = localStorage.getItem(`cart_${userId}`);
//         if (storedCart) {
//           console.log('Datos del carrito encontrados en localStorage para el userId:', userId);
//           setCart(JSON.parse(storedCart));
//         } else {
//           setCart([]);
//         }
//       } else {
//         console.warn('Error al iniciar sesión. Respuesta inesperada del servidor:', response);
//       }
//     } catch (error) {
//       console.error('Error durante el inicio de sesión:', error);
//     }
//   };

//   // Function to clear user session (e.g., on logout)
//   const clearUserSession = () => {
//     console.log('clearUserSession llamado.');
//     console.log('Limpiando token y userId de sesión del localStorage.');
//     if (userSession && userSession.token && userSession.userId) {
//       localStorage.removeItem('userToken');
//       localStorage.removeItem('userId');
//       localStorage.removeItem(`cart_${userSession.userId}`);
//       setUserSession(null);
//       setCart([]);
//     }
//   };

//   // Function to add product to the cart
//   const addToCart = (product) => {
//     console.log('addToCart llamado con producto:', product);
//     if (product && userSession && userSession.token && userSession.userId) {
//       console.log('Añadiendo producto al carrito para el userId:', userSession.userId);
//       const updatedCart = [...cart, product];
//       setCart(updatedCart);
//     } else {
//       console.warn('Producto inválido o sesión de usuario no activa. No se pudo añadir al carrito.');
//     }
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     console.log('clearCart llamado.');
//     if (userSession && userSession.token && userSession.userId) {
//       console.log('Limpiando el carrito del localStorage para el userId:', userSession.userId);
//       setCart([]);
//       localStorage.removeItem(`cart_${userSession.userId}`);
//     } else {
//       console.warn('No se pudo limpiar el carrito porque no hay una sesión de usuario activa.');
//     }
//   };

//   return {
//     userSession,
//     saveUserSession,
//     clearUserSession,
//     cart,
//     addToCart,
//     clearCart,
//   };
// };

// export default LocalStorageController;


import { useState, useEffect } from 'react';
import BACKEND from '../../config';
import axios from 'axios';

const LocalStorageController = () => {
  console.log('LocalStorageController montado.');
  const [userSession, setUserSession] = useState(null);
  const [cart, setCart] = useState([]);

  // Function to fetch userId from the backend using the token
  const fetchUserId = async (token) => {
    try {
      console.log('Realizando petición para obtener el userId con el token:', token);
      const response = await axios.get(`${BACKEND}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userId = response.data.userId;
      if (userId) {
        console.log('userId obtenido exitosamente:', userId);
        localStorage.setItem('userId', userId); // Guardar userId en localStorage
        setUserSession((prev) => ({ ...prev, userId })); // Actualizar el estado
      } else {
        console.error('No se obtuvo un userId válido del backend.');
      }
    } catch (error) {
      console.error('Error al obtener el userId desde el backend:', error);
    }
  };

  // Initialize data from localStorage when the component mounts
  useEffect(() => {
    console.log('Inicializando datos desde localStorage...');
    const storedToken = localStorage.getItem('userToken');
    const storedUserId = localStorage.getItem('userId');
    if (storedToken) {
      if (storedUserId) {
        console.log('Token y userId de sesión encontrados en localStorage:', storedToken, storedUserId);
        setUserSession({ token: storedToken, userId: storedUserId });
        const storedCart = localStorage.getItem(`cart_${storedUserId}`);
        if (storedCart) {
          console.log('Datos del carrito encontrados en localStorage para el userId:', storedUserId);
          const parsedCart = JSON.parse(storedCart);
          setCart(parsedCart);
        } else {
          console.warn('No se encontraron productos en el localStorage para el userId:', storedUserId);
        }
      } else {
        console.log('No se encontró un userId en el localStorage, intentando obtenerlo desde el backend...');
        fetchUserId(storedToken); // Intentar obtener el userId
      }
    } else {
      console.warn('No se encontró un token de sesión en el localStorage.');
    }
  }, []);

  // Save user session to localStorage whenever it changes
  useEffect(() => {
    if (userSession && userSession.token && userSession.userId) {
      console.log('Guardando token y userId de sesión en localStorage...');
      localStorage.setItem('userToken', userSession.token);
      localStorage.setItem('userId', userSession.userId);
    }
  }, [userSession]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (userSession && userSession.token && userSession.userId) {
      console.log('Guardando datos del carrito en localStorage...');
      if (cart.length > 0) {
        console.log('Guardando carrito en localStorage para el userId:', userSession.userId);
        localStorage.setItem(`cart_${userSession.userId}`, JSON.stringify(cart));
      } else {
        console.log('El carrito está vacío, eliminando del localStorage para el userId:', userSession.userId);
        localStorage.removeItem(`cart_${userSession.userId}`);
      }
    }
  }, [cart, userSession]);

  // Function to save user session after successful login
  const saveUserSession = async (token, userId) => {
    console.log('Guardando token y userId de sesión en el estado...');
    setUserSession({ token, userId });
  };

  // Function to clear user session (e.g., on logout)
  const clearUserSession = () => {
    console.log('clearUserSession llamado.');
    console.log('Limpiando token y userId de sesión del localStorage.');
    if (userSession && userSession.token && userSession.userId) {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userId');
      localStorage.removeItem(`cart_${userSession.userId}`);
      setUserSession(null);
      setCart([]);
    }
  };

  // Function to add product to the cart
  const addToCart = (product) => {
    console.log('addToCart llamado con producto:', product);
    if (product && userSession && userSession.token && userSession.userId) {
      console.log('Añadiendo producto al carrito para el userId:', userSession.userId);
      const updatedCart = [...cart, product];
      setCart(updatedCart);
    } else {
      console.warn('Producto inválido o sesión de usuario no activa. No se pudo añadir al carrito.');
    }
  };

  // Function to clear the cart
  const clearCart = () => {
    console.log('clearCart llamado.');
    if (userSession && userSession.token && userSession.userId) {
      console.log('Limpiando el carrito del localStorage para el userId:', userSession.userId);
      setCart([]);
      localStorage.removeItem(`cart_${userSession.userId}`);
    } else {
      console.warn('No se pudo limpiar el carrito porque no hay una sesión de usuario activa.');
    }
  };

  return {
    userSession,
    saveUserSession,
    clearUserSession,
    cart,
    addToCart,
    clearCart,
  };
};

export default LocalStorageController;

