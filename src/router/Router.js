import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ListaProducto } from '../pages';

export const RouterPages = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={ <Home /> }>
                        <Route path='/' element={ <ListaProducto />} />
                    </Route>
                    
                </Routes>
            </Router>
        </>
    );
}

