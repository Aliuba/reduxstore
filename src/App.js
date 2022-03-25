import React, {Component, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";

import {setProducts} from "./redux/action-creators";

export default function App(){
  const {cart, wishlist, products}=useSelector(({cart:{cart}, wishlist:{wishlist}, products:{products}})=> ({
    cart, wishlist, products
  }))
  const dispatch=useDispatch();

  // const fetchData=useCallback( async ()=>{
  //
  //   const data= await productService.getProducts().then(value=>value.json())
  //   dispatch(setProducts(data))
  //
  //
  // }, [])
useEffect(()=>{dispatch(setProducts())},[dispatch])
  return(
<div>
  <Header/>
  <ProductList products={products}/>
  {products.length}
</div>
);
}
