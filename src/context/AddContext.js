import React, { createContext } from 'react';

export const AddContext = createContext();

export function AddProvider(props){

    const { children } = props;

    const addProducts = (products) => {
        let productArray = [];
        const datosStorage = sessionStorage.getItem('myProducts');


        if(datosStorage){
            productArray = JSON.parse(datosStorage);
            productArray.push(products);
            sessionStorage.setItem('myProducts', JSON.stringify(productArray));
        }else{
            productArray.push(products);
            sessionStorage.setItem('myProducts', JSON.stringify(productArray));
        }
    }

    const data = {
        addProducts
    }

    return <AddContext.Provider value={data}>
        { children }
    </AddContext.Provider>
}