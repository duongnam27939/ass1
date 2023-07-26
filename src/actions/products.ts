import { IProduct } from "@/interface/products";
import axios from "axios"

export const fetchProduct = () => async (dispatch: any) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/products`)
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE' })
    }
}

export const AddProduct = (products:IProduct) =>async(dispatch: any) =>{
    try {
        const {data} = await axios.post(`http://localhost:3000/products`,products)
        dispatch({type: 'ADD_PRODUCT',payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const UpdatePro = (products:IProduct) =>async(dispatch: any) =>{
    try {
        const {data} = await axios.put(`http://localhost:3000/products/${products.id}`, products);
        dispatch({type: 'UPDATE_PRODUCT',payload: data})
        console.log('data: ', data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProducts = (id:number) => async (dispatch:any)=>{
    try {
         await axios.delete(`http://localhost:3000/products/${id}`)
        dispatch({type:'DELETE_PRODUCT', payload: id})
    } catch (error) {
        console.log(error);
        
    }
}