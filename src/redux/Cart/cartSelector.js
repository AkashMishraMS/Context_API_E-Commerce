import { createSelector } from "reselect"
import CartItem from "../../Component/cart-Item/cartItem"

const selectCart = state => state.cart

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItem
    )
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItem => cartItem.reduce((accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItem],
    cartItem => cartItem.reduce((accumalatedQty, cartItem) => accumalatedQty +  cartItem.quantity * cartItem.price, 0)
  )  