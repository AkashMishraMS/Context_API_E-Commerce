import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import CartIcon from "../cart-icon/cartIcon";
import CartDropDown from "../cart-dropDown/cartDrop";
import { connect } from "react-redux"
import { selectCartHidden } from "../../redux/Cart/cartSelector";
import { createStructuredSelector } from "reselect";
import logo from '../../logo.svg';
import '../../App.css';

const Header = ({ hidden }) => (
    <div className='header'>
        <Link to='/'>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option'>CONTACT</Link>
        <Link className='option' to='/signin'>SIGN IN</Link>
    <CartIcon/>
        </div>
        {hidden ? null : <CartDropDown/>}
    </div>
)

const mapStateToProps = createStructuredSelector({
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)