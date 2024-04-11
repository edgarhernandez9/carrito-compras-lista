import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Buton } from '../Buton';

import '../../theme/NavBar.css'
import { useAddProduct } from '../../hooks';

export const NavBar = () => {

    const { datosProductos } = useAddProduct();

    
    return (
        <ul className="navbar">
            <div className="navbar-options">
                <li className="descripcion">Inicio</li>
                <li className="descripcion">Acerca de</li>
                <li className="descripcion">Blog</li>
                <li className="descripcion">Contacto</li>
            </div>
            <div className="botones">
                <Link to={'http://localhost:3001/car'}>
                    <Buton
                        type="primary"
                        name="Carrito"
                        stylesBtn={{
                            backgroundColor: "#309F5A",
                            borderRadius: "13px",
                            border: "none",
                            width: "120px",
                            height: "30px",
                            cursor: "pointer",
                        }}
                        active={ true }
                        onClick={ () => document.cookie = `productData=${encodeURIComponent(JSON.stringify(datosProductos))}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`}
                    />
                </Link>
                
            </div>
        </ul>
    )
}
