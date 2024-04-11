import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ListaProducto } from '../pages';
// import { Car } from 'componentsViews/Home';

const Car = lazy(() => import('componentsViews/Home'));

export const RouterPages = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={ <Home /> }>
                        <Route path='/' element={ <ListaProducto />} />
                        <Route path='/car' exact element={
                            <Suspense fallback={<div>Loading...</div>} >
                                <Car />
                            </Suspense>
                        } />
                    </Route>
                    
                    
                </Routes>
            </Router>
        </>
    );
}

