import CartActionTypes from "./cartTypes";
import { addItemToCart, removeItemFromCart } from "./utils";
const INITIAL_STATE = {
    hidden:true,
    cartItem:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItem: state.cartItem.filter(cartItem => cartItem.id !== action.payload.id)
            }
            case CartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItem:removeItemFromCart(state.cartItem, action.payload)
                }

        default:
            return state
    }
}

export default cartReducer