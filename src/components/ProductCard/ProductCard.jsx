import React from 'react';
import { useAddProduct } from '../../hooks'
import { Buton } from '../Buton';

import '../../theme/ProductCard.css'


export const ProductCard = (props) => {

    const { product } = props;
    const { addProducts } = useAddProduct();

    const addProduct = (data) => {
        addProducts(data)
    }


    return (
        <div className="card">
            <div>
                <img src={product.image} className="card-img" />

                <div className="card-info">
                    <p className="card-info-text">Nombre: {product.name}</p>
                    <p className="card-info-text">Precio: $ {product.precio}</p>
                </div>

                <div className="card-btn">
                    <Buton
                        type="primary"
                        name="Add Car"
                        stylesBtn={{
                            backgroundColor: "#309F5A",
                            borderRadius: "13px",
                            border: "none",
                            width: "120px",
                            height: "30px",
                            cursor: "pointer",
                        }}
                        onClick= { () => addProduct(product)}
                    />
                </div>
            </div>
        </div>
    )
}
