import React from "react"
import './cartDrop.scss'
import CustomBtn from ".././CustomeButton/customBtn";
import CartItem from "../cart-Item/cartItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/Cart/cartAction";


const CartDropDown = ({ cartItem, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cartItem'> 
        {
            cartItem.length ? 
             cartItem.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
                ))
            :
            <span className='empty-msg'>Your cart is empty</span>

        }
        </div>
            <CustomBtn onClick={() => { 
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomBtn>
        </div>
)

const mapStateToProps = ({ cart: { cartItem } }) => ({
    cartItem
})

export default withRouter(connect(mapStateToProps)(CartDropDown))