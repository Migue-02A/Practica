import React, { useState, useEffect } from 'react'
import axios from 'axios';

import '../Styles/PaginaPrincipal.css'

const PaginaPrincipal = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/Laboratorio');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);

    return (
        <div id='Contenedor'>

            <header id='HeaderPrincipal'>
                <div className='ContenedorContacto'>
                    <p className='Correo'>Correo: Laboratorio3@gmail.com</p>
                    <p className='Tel'>Tel: 3211233212</p>
                </div>
            </header>

            <header id='HeaderSecundario'>
                <a id='Contenedor2' href="/"><h2 >Tienda virtual</h2></a>
            </header>

            <section id='ContenidoSeccion1' >
                <div id='Contenido'>
                    <p className='Co1'>Productos</p>
                </div>
            </section>

            <section id='ListaProductos'>
                {productos.map((producto, index) => (
                    <div id='Caja' key={index}>
                        <p className='Pro'>{producto.IMG_Producto}</p>
                        <h4>{producto.Precio}</h4>
                    </div>
                ))}
            </section>

        </div>
    )
}
export default PaginaPrincipal