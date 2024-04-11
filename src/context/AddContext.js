import React, { createContext, useState } from 'react';

export const AddContext = createContext();

export function AddProvider(props){

    const [datosProductos, setDatosProductos] = useState([]);
    const { children } = props;

    const addProducts = (products) => {
        let productArray = [];
        const datosStorage = sessionStorage.getItem('myProducts');



        if(datosStorage){
            productArray = JSON.parse(datosStorage)
            const existingProductIndex = productArray.findIndex(producto => producto.id === products.id);
            if (existingProductIndex !== -1) {
                productArray[existingProductIndex].cantidad += 1;
            } else {
                const newProduct = {
                    ...products,
                    cantidad: 1
                };
                productArray.push(newProduct);
            }
            
        }else{
            const productsNew = {
                ...products,
                cantidad: 1
            }
            productArray.push(productsNew);
        }

        setDatosProductos(productArray)
        sessionStorage.setItem('myProducts', JSON.stringify(productArray));
    }

    const data = {
        datosProductos,
        addProducts,
    }

    return <AddContext.Provider value={data}>
        { children }
    </AddContext.Provider>
}