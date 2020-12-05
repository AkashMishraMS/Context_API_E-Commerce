import React from 'react'
import {ReactComponent as  Icon}  from '../../asset/bag.svg' 
import './cartIcon.scss'
import { connect } from "react-redux";
import {toggleCartHidden} from "../../redux/Cart/cartAction";
import { selectCartItem, selectCartItemCount } from "../../redux/Cart/cartSelector";

const CartIcon = ({toggleCartHidden, itemCount  }) => (   
   <div className='cart-icon' onClick={toggleCartHidden}>
       <Icon className='bag-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)