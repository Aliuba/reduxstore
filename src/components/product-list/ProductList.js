import React from 'react';
import "../../App.css"
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux";

export const ProductList = ({products}) => {
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart:{cart}}) =>
        ({wishlist, cart})
    )
    const dispatch = useDispatch();
    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };
    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    };
    return (
        <div>{products.map(product =>
            <ProductItem
                isAddedToCart={!!cart.find(({id})=>id===product.id)}
                isAddedtoWishlist={!!wishlist.find((el)=>el.id===product.id)}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
                product={product}
                key={product.id}
            />
        )}
        </div>
    )
}
