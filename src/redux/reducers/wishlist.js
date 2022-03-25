import {TOOGLE_ITEM_IN_WISHLIST} from "../action-types"


const initialState = {
    wishlist: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_ITEM_IN_WISHLIST: {

            const updatedWishlist = state.wishlist.filter((el )=> el.id !== action.payload.id)

            if (state.wishlist.length === updatedWishlist.length) {
                updatedWishlist.push(action.payload)
            }
            return {
                ...state,
                wishlist: updatedWishlist
            }
        }
        default: {
            return state
        }
    }
}
