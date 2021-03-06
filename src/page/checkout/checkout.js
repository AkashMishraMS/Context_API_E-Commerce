import React from "react"
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem, selectCartTotal } from "../../redux/Cart/cartSelector";
import CheckoutItem from "../../Component/checkout-item/checkoutItem";


const CheckoutPage = ({ cartItem, total }) => (
    
    <div className='checkout-page'>
       <div className='checkout-header'>
           <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span></span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
       </div>
       {
           cartItem.map(cartItem =>(
               <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
           ))
       }
       <div className='total'>
    <span>TOTAL: ${total}</span>
       </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItem,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)