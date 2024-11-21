import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../../functions';
import BACKEND from '../../config';
import "./cat_cel.css";

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

    const openModal = (op, id = '', firstname = '', Price = '') => {
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
    };

    const validar = () => {
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
                closeModalRef.current?.click(); // Cierra el modal si existe
                getProducts();
            }
        } catch (error) {
            show_alert('Error en la solicitud al servidor', 'error');
            console.error(error);
        }
    };

    return (
        <div className='App'>
            <div className='add_products'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button
                                onClick={() => openModal(1)}
                                className='btn btn-dark'
                                data-bs-toggle='modal'
                                data-bs-target='#modalProducts'>
                                <i className='fa-solid fa-circle-plus'></i> Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
                                    placeholder='Name'
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
                                    placeholder='Price'
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
                                    placeholder='imagen'
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                />
                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i> Añadir
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
        </div>
    );
};

export default ShowProducts;
