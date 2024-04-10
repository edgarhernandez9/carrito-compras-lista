import React from 'react';
import { ProductCard } from '../../components'
import productsData from '../../data/products';

import '../../theme/ListaProducto.css';


export const ListaProducto = () => {

    return (
        <div className='product-list'>
            {
                productsData.map( product => (
                    <ProductCard key={product.id} product={ product } />
                ))
            }
        </div>
    )
}
