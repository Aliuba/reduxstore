import React, {Component} from 'react';
import "../../App.css"
export class ProductItem extends Component {
    render() {
        let{
            isAddedToCart,
            isAddedtoWishlist,
            onAddToCart,
            onAddToWishlist,
            product,
            product:{id, title, price, description}}= this.props
        return (
            <div>
                <h5>{id}</h5>
                <h5>{title}</h5>
                <h5>{price}</h5>
                <h5>{description}</h5>
                <button
                    className={isAddedToCart?'red':"green"}
                    onClick={()=>onAddToCart(product)}>{isAddedtoWishlist?'remove from cart':"add to cart"}</button>
                <button
                    className={isAddedtoWishlist?"red":"green"}
                    onClick={()=>onAddToWishlist(product)}>{isAddedtoWishlist?"remove from wishlist":"add to wishlist"}</button>
                <hr/>
            </div>
        );
    }
}


