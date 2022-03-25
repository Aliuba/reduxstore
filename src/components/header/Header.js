import React, {Component} from 'react';
import "../../App.css"
import {useSelector} from "react-redux";
export const Header=(props)=>{
    const {cart, wishlist}=useSelector(({cart:{cart}, wishlist:{wishlist}})=>({cart, wishlist}))
    const products=useSelector(({products:{products}})=>products)

    const total = (x) => x.reduce((alt, el) => (alt + el.price), 0)

    return(
        <header className={"d-flex just-between"}>
            <h1> Hello in shop</h1>

              <div className={"mx-10"} title={"cart:"+total(cart)}>cart: {cart.length}</div>
            <div className={"mx-10"} title={"wishlist:"+total(wishlist)}>wishlist:{wishlist.length}</div>


        </header>

    )
}
