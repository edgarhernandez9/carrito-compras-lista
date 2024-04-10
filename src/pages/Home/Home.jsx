import React from 'react';
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components';
import '../../theme/Home.css';

export const Home = () => {
    return (
        <div className="containerHome">
            <NavBar />
            <div className="containerHome-outlet">
                <Outlet />
            </div>
        </div>
    )
}
