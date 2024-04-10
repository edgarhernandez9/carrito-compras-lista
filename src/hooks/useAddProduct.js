import { useContext } from 'react';
import { AddContext } from '../context';


export const useAddProduct = () => useContext(AddContext);