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
//     const storedSession = localStorage.getItem('userSession');
//     if (storedSession) {
//       console.log('Datos de sesión encontrados en localStorage:', storedSession);
//       try {
//         const parsedSession = JSON.parse(storedSession);
//         setUserSession(parsedSession);
//         const storedCart = localStorage.getItem(`cart_${parsedSession.Id}`);
//         if (storedCart) {
//           console.log('Datos del carrito encontrados en localStorage para el usuario:', parsedSession.userId);
//           const parsedCart = JSON.parse(storedCart);
//           setCart(parsedCart);
//         } else {
//           console.warn('No se encontraron productos en el localStorage para el usuario:', parsedSession.userId);
//         }
//       } catch (error) {
//         console.error('Error al analizar la sesión del localStorage:', error);
//       }
//     } else {
//       console.warn('No se encontraron datos de sesión en el localStorage.');
//     }
//   }, []);

//   // Save user session to localStorage whenever it changes
//   useEffect(() => {
//     if (userSession) {
//       console.log('Guardando datos de la sesión en localStorage...');
//       localStorage.setItem('userSession', JSON.stringify(userSession));
//     }
//   }, [userSession]);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     if (userSession) {
//       console.log('Guardando datos del carrito en localStorage...');
//       if (cart.length > 0) {
//         console.log('Guardando carrito en localStorage para el usuario:', userSession.userId);
//         localStorage.setItem(`cart_${userSession.userId}`, JSON.stringify(cart));
//       } else {
//         console.log('El carrito está vacío, eliminando del localStorage para el usuario:', userSession.userId);
//         localStorage.removeItem(`cart_${userSession.userId}`);
//       }
//     }
//   }, [cart, userSession]);

//   // Function to save user session after successful login
//   const saveUserSession = async (email, password) => {
//     try {
//       console.log('Iniciando sesión con:', { email, password });
//       // First request to validate user credentials
//       const response = await axios.post(`${BACKEND}/login`, { email, password });
//       if (response.status === 200) {
//         console.log('Credenciales validadas correctamente. Obteniendo datos del usuario...');
//         // Second request to get user data
//         const userResponse = await axios.get(`${BACKEND}/user`, {
//           headers: { Authorization: `Bearer ${response.data.token}` },
//         });
//         if (userResponse.status === 200 && userResponse.data) {
//           const { id, firstname } = userResponse.data;
//           const sessionData = { userId: id, userName: firstname };
//           console.log('Guardando sesión de usuario en localStorage:', sessionData);
//           localStorage.setItem('userSession', JSON.stringify(sessionData));
//           setUserSession(sessionData);
//           // Initialize the user's cart after login
//           const storedCart = localStorage.getItem(`cart_${id}`);
//           if (storedCart) {
//             console.log('Datos del carrito encontrados en localStorage para el usuario:', id);
//             setCart(JSON.parse(storedCart));
//           } else {
//             setCart([]);
//           }
//         } else {
//           console.warn('Error al obtener los datos del usuario. Respuesta inesperada del servidor:', userResponse);
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
//     console.log('Limpiando sesión de usuario del localStorage.');
//     if (userSession) {
//       localStorage.removeItem('userSession');
//       localStorage.removeItem(`cart_${userSession.userId}`);
//       setUserSession(null);
//       setCart([]);
//     }
//   };

//   // Function to add product to the cart
//   const addToCart = (product) => {
//     console.log('addToCart llamado con producto:', product);
//     if (product && userSession) {
//       console.log('Añadiendo producto al carrito del usuario:', userSession.userId);
//       const updatedCart = [...cart, product];
//       setCart(updatedCart);
//     } else {
//       console.warn('Producto inválido o sesión de usuario no activa. No se pudo añadir al carrito.');
//     }
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     console.log('clearCart llamado.');
//     if (userSession) {
//       console.log('Limpiando el carrito del localStorage para el usuario:', userSession.userId);
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
import axios from 'axios';
import BACKEND from '../../config';

const LocalStorageController = () => {
  console.log('LocalStorageController montado.');
  const [userSession, setUserSession] = useState(null);
  const [cart, setCart] = useState([]);

  // Initialize data from localStorage when the component mounts
  useEffect(() => {
    console.log('Inicializando datos desde localStorage...');
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      console.log('Token de sesión encontrado en localStorage:', storedToken);
      setUserSession({ token: storedToken });
      const storedCart = localStorage.getItem(`cart_${storedToken}`);
      if (storedCart) {
        console.log('Datos del carrito encontrados en localStorage para el token:', storedToken);
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
      } else {
        console.warn('No se encontraron productos en el localStorage para el token:', storedToken);
      }
    } else {
      console.warn('No se encontró token de sesión en el localStorage.');
    }
  }, []);

  // Save user session to localStorage whenever it changes
  useEffect(() => {
    if (userSession && userSession.token) {
      console.log('Guardando token de sesión en localStorage...');
      localStorage.setItem('userToken', userSession.token);
    }
  }, [userSession]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (userSession && userSession.token) {
      console.log('Guardando datos del carrito en localStorage...');
      if (cart.length > 0) {
        console.log('Guardando carrito en localStorage para el token:', userSession.token);
        localStorage.setItem(`cart_${userSession.token}`, JSON.stringify(cart));
      } else {
        console.log('El carrito está vacío, eliminando del localStorage para el token:', userSession.token);
        localStorage.removeItem(`cart_${userSession.token}`);
      }
    }
  }, [cart, userSession]);

  // Function to save user session after successful login
  const saveUserSession = async (email, password) => {
    try {
      console.log('Iniciando sesión con:', { email, password });
      // Request to validate user credentials and get a token
      const response = await axios.post(`${BACKEND}/login`, { email, password });
      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        console.log('Guardando token de sesión en localStorage:', token);
        localStorage.setItem('userToken', token);
        setUserSession({ token });
        // Initialize the user's cart after login
        const storedCart = localStorage.getItem(`cart_${token}`);
        if (storedCart) {
          console.log('Datos del carrito encontrados en localStorage para el token:', token);
          setCart(JSON.parse(storedCart));
        } else {
          setCart([]);
        }
      } else {
        console.warn('Error al iniciar sesión. Respuesta inesperada del servidor:', response);
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  // Function to clear user session (e.g., on logout)
  const clearUserSession = () => {
    console.log('clearUserSession llamado.');
    console.log('Limpiando token de sesión del localStorage.');
    if (userSession && userSession.token) {
      localStorage.removeItem('userToken');
      localStorage.removeItem(`cart_${userSession.token}`);
      setUserSession(null);
      setCart([]);
    }
  };

  // Function to add product to the cart
  const addToCart = (product) => {
    console.log('addToCart llamado con producto:', product);
    if (product && userSession && userSession.token) {
      console.log('Añadiendo producto al carrito para el token:', userSession.token);
      const updatedCart = [...cart, product];
      setCart(updatedCart);
    } else {
      console.warn('Producto inválido o sesión de usuario no activa. No se pudo añadir al carrito.');
    }
  };

  // Function to clear the cart
  const clearCart = () => {
    console.log('clearCart llamado.');
    if (userSession && userSession.token) {
      console.log('Limpiando el carrito del localStorage para el token:', userSession.token);
      setCart([]);
      localStorage.removeItem(`cart_${userSession.token}`);
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
