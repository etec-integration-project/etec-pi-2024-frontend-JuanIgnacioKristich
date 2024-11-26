
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { show_alert } from '../../functions';
// import BACKEND from '../../config';
// import "./cat_cel.css";

// const ShowProducts = () => {
//     const url = `${BACKEND}/products`;
//     const modalRef = useRef(null); // Referencia para el modal
//     const closeModalRef = useRef(null); // Referencia para cerrar el modal
    
//     const [prod, setProducts] = useState([]);
//     const [id, setId] = useState('');
//     const [firstname, setFirstname] = useState('');
//     const [Price, setPrice] = useState('');
//     const [img, setImg] = useState('');
//     const [title, setTitle] = useState('');
//     const [operation, setOperation] = useState(1);

//     useEffect(() => {
//         getProducts();
//     }, []);
    
//     const getProducts = async () => {
//         try {
//             const response = await axios.get(`${BACKEND}/products`);
//             setProducts(response.data);
//         } catch (error) {
//             show_alert('Error al obtener productos', 'error');
//             console.error(error);
//         }
//     };

//     const openModal = (op, id = '', firstname = '', Price = '', img = '') => {
//         setId('');
//         setFirstname('');
//         setPrice('');
//         setImg('');
//         setOperation(op);

//         if (op === 1) {
//             setTitle('Añadir Producto');
//         } else if (op === 2) {
//             setTitle('Editar Producto');
//             setId(id);
//             setFirstname(firstname);
//             setPrice(Price);
//             setImg(img);
//         }

//         // Abre el modal manualmente para asegurarse de que esté abierto
//         if (modalRef.current) {
//             const modalElement = new window.bootstrap.Modal(modalRef.current);
//             modalElement.show();
//         }
//     };

//     const validar = () => {
//         let parametros;
//         let metodo;
    
//         // Validaciones de los campos
//         if (firstname.trim() === '') {
//             show_alert('Escribe el nombre del producto', 'warning');
//             return;
//         } else if (Price === '' || isNaN(Number(Price))) {
//             show_alert('Escribe un precio válido para el producto', 'warning');
//             return;
//         } else if (img.trim() === '') {
//             show_alert('Escribe una URL de imagen válida', 'warning');
//             return;
//         }
    
//         // Configurar los parámetros y método HTTP según la operación
//         if (operation === 1) { // Añadir producto
//             parametros = { firstname: firstname.trim(), Price: Number(Price), img: img.trim() };
//             metodo = 'POST';
//         } else { // Editar producto
//             parametros = { id: id, firstname: firstname.trim(), Price: Number(Price), img: img.trim() };
//             metodo = 'PUT';
//         }
    
//         // Llamar a la función de solicitud
//         enviarSolicitud(metodo, parametros);
//     };

//     const enviarSolicitud = async (metodo, parametros) => {
//         try {
//             const respuesta = await axios({
//                 method: metodo,
//                 url: `${BACKEND}/products`,
//                 data: parametros,
//             });

//             const tipo = respuesta.data.tipo || 'success';
//             const msj = respuesta.data.mensaje || 'Operación realizada con éxito';

//             show_alert(msj, tipo);

//             if (tipo === 'success') {
//                 if (closeModalRef.current) {
//                     closeModalRef.current.click(); // Cierra el modal si existe
//                 }
//                 getProducts();
//             }
//         } catch (error) {
//             show_alert('Error en la solicitud al servidor', 'error');
//             console.error(error);
//         }
//     };

//     return (
//             <div id='modalProducts' className='modal fade' aria-hidden='true' ref={modalRef}>
//                 <div className='modal-dialog'>
//                     <div className='modal-content'>
//                         <div className='modal-body'>
//                             <input type='hidden' id='id' />
//                             <div className='input-group mb-3'>
//                                 <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
//                                 <input
//                                     type='text'
//                                     id='firstname'
//                                     className='form-control'
//                                     placeholder='Nombre del producto'
//                                     value={firstname}
//                                     onChange={(e) => setFirstname(e.target.value)}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
//                                 <input
//                                     type='number'
//                                     id='lastname'
//                                     className='form-control'
//                                     placeholder='Precio'
//                                     value={Price}
//                                     onChange={(e) => setPrice(e.target.value)}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
//                                 <input
//                                     type='text'
//                                     id='imagen'
//                                     className='form-control'
//                                     placeholder='URL de imagen'
//                                     value={img}
//                                     onChange={(e) => setImg(e.target.value)}
//                                 />
//                             </div>
//                             <div className='d-grid col-6 mx-auto'>
//                                 <button onClick={() => validar()} className='btn btn-success'>
//                                     <i className='fa-solid fa-floppy-disk'></i> Añadir Producto
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='modal-footer'>
//                             <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal' ref={closeModalRef}>
//                                 Cerrar
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     );
// };

// export default ShowProducts;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { show_alert } from '../../functions';
import BACKEND from '../../config';
import "./showProducts.css";

const ShowProducts = () => {
    const url = `${BACKEND}/products`;
    const modalRef = useRef(null); // Referencia para el modal
    const closeModalRef = useRef(null); // Referencia para cerrar el modal
    
    const [prod, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [firstname, setFirstname] = useState('');
    const [Price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [operation, setOperation] = useState(1);

    useEffect(() => {
        getProducts();
    }, []);
    
    const getProducts = async () => {
        try {
            const response = await axios.get(`${BACKEND}/products`);
            setProducts(response.data);
        } catch (error) {
            show_alert('Error al obtener productos', 'error');
            console.error(error);
        }
    };

    const isUserLoggedIn = () => {
        // Comprobamos si hay un token de sesión en el localStorage
        const token = localStorage.getItem('userToken');
        return token !== null && token !== '';
    };

    const openModal = (op, id = '', firstname = '', Price = '', img = '') => {
        if (!isUserLoggedIn()) {
            show_alert('Debes iniciar sesión para realizar esta acción', 'warning');
            return;
        }

        setId('');
        setFirstname('');
        setPrice('');
        setImg('');
        setOperation(op);

        if (op === 1) {
            setTitle('Añadir Producto');
        } else if (op === 2) {
            setTitle('Editar Producto');
            setId(id);
            setFirstname(firstname);
            setPrice(Price);
            setImg(img);
        }

        // Abre el modal manualmente para asegurarse de que esté abierto
        if (modalRef.current) {
            const modalElement = new window.bootstrap.Modal(modalRef.current);
            modalElement.show();
        }
    };

    const validar = () => {
        if (!isUserLoggedIn()) {
            show_alert('Debes iniciar sesión para realizar esta acción', 'warning');
            return;
        }

        let parametros;
        let metodo;
    
        // Validaciones de los campos
        if (firstname.trim() === '') {
            show_alert('Escribe el nombre del producto', 'warning');
            return;
        } else if (Price === '' || isNaN(Number(Price))) {
            show_alert('Escribe un precio válido para el producto', 'warning');
            return;
        } else if (img.trim() === '') {
            show_alert('Escribe una URL de imagen válida', 'warning');
            return;
        }
    
        // Configurar los parámetros y método HTTP según la operación
        if (operation === 1) { // Añadir producto
            parametros = { firstname: firstname.trim(), Price: Number(Price), img: img.trim() };
            metodo = 'POST';
        } else { // Editar producto
            parametros = { id: id, firstname: firstname.trim(), Price: Number(Price), img: img.trim() };
            metodo = 'PUT';
        }
    
        // Llamar a la función de solicitud
        enviarSolicitud(metodo, parametros);
    };

    const enviarSolicitud = async (metodo, parametros) => {
        try {
            const respuesta = await axios({
                method: metodo,
                url: `${BACKEND}/products`,
                data: parametros,
            });

            const tipo = respuesta.data.tipo || 'success';
            const msj = respuesta.data.mensaje || 'Operación realizada con éxito';

            show_alert(msj, tipo);

            if (tipo === 'success') {
                if (closeModalRef.current) {
                    closeModalRef.current.click(); // Cierra el modal si existe
                }
                getProducts();
            }
        } catch (error) {
            show_alert('Error en la solicitud al servidor', 'error');
            console.error(error);
        }
    };

    return (
            <div id='modalProducts' className='modal fade' aria-hidden='true' ref={modalRef}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <input type='hidden' id='id' />
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input
                                    type='text'
                                    id='firstname'
                                    className='form-control'
                                    placeholder='Nombre del producto'
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                                <input
                                    type='number'
                                    id='lastname'
                                    className='form-control'
                                    placeholder='Precio'
                                    value={Price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                                <input
                                    type='text'
                                    id='imagen'
                                    className='form-control'
                                    placeholder='URL de imagen'
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                />
                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i> Añadir producto
                                </button>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal' ref={closeModalRef}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ShowProducts;
