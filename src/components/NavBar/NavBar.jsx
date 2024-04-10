import React from 'react';
import { Link, useNavigate} from 'react-router-dom'
import { Buton } from '../Buton';

import '../../theme/NavBar.css'

export const NavBar = () => {

    const datosProductos = sessionStorage.getItem('myProducts');
    const navigate = useNavigate();

    const baseUrl = window.location.origin;
    const relativePath = '/car';

    return (
        <ul className="navbar">
            <div className="navbar-options">
                <li className="descripcion">Inicio</li>
                <li className="descripcion">Acerca de</li>
                <li className="descripcion">Blog</li>
                <li className="descripcion">Contacto</li>
            </div>
            <div className="botones">
                {/* <Link to={'http://localhost:3001/car'} state={{ datosProductos }}> */}
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
                        onClick={ () => navigate(`${relativePath}`, { state: { datosProductos } })}
                    />
                {/* </Link> */}
                
            </div>
        </ul>
    )
}
