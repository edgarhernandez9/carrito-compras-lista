import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Buton } from '../Buton';

import '../../theme/NavBar.css'


export const NavBar = () => {

    const [data, setData] = useState(sessionStorage.getItem('myProducts'));
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const updateDataFromSessionStorage = () => {
            setData(JSON.parse(sessionStorage.getItem('myProducts')));
        };

        updateDataFromSessionStorage();
        const intervalId = setInterval(updateDataFromSessionStorage, 300);

        return () => clearInterval(intervalId);
    }, []); 

    const handleClick = () => {
        if (location.pathname === '/') {
            navigate('/car', { state: data })
        }else{
            sessionStorage.removeItem('myProducts')
            navigate('/')
        }
    }


    
    return (
        <ul className="navbar">
            <div className="navbar-options">
                <li className="descripcion">Inicio</li>
                <li className="descripcion">Acerca de</li>
                <li className="descripcion">Blog</li>
                <li className="descripcion">Contacto</li>
            </div>
            <div className="botones">
                {/* <Link to={'/car'} state={{ data }}> */}
                    <Buton
                        type="primary"
                        name={ location.pathname !== '/' ? "Home" : "Carrito"}
                        stylesBtn={{
                            backgroundColor: "#309F5A",
                            borderRadius: "13px",
                            border: "none",
                            width: "120px",
                            height: "30px",
                            cursor: "pointer",
                        }}
                        active={ true }
                        onClick={ () => handleClick()}
                    />
                {/* </Link> */}
                
            </div>
        </ul>
    )
}
