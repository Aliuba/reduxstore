import {SET_PRODUCTS, TOOGLE_ITEM_IN_CART, TOOGLE_ITEM_IN_WISHLIST} from "../action-types";
import {services} from "../../services";
const {productService}=services

export const setProducts=()=>async (dispatch)=>  {


    const data= await  productService.getProducts().then(value=>value.json())
    dispatch(({type:SET_PRODUCTS, payload:data}))}


export const toggleItemInCart=(product)=>({type:TOOGLE_ITEM_IN_CART, payload:product})
export const toggleItemInWishlist=(product)=>({type:TOOGLE_ITEM_IN_WISHLIST, payload:product})







