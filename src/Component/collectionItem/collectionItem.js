import React from "react";
import './collectionItem.scss';
import CustomBtn from "../CustomeButton/customBtn";
import { connect } from 'react-redux'
import { addItem } from "../../redux/Cart/cartAction";

const CollectionItem = ({ item, addItem }) => {
 const { name, imageUrl, price } = item
return (
    <div className='collection-item'>
        <div 
        className ='image'
        style = {{backgroundImage:`url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <span className=''>
                {name}
            </span>
            <span className='price'>
                {price}
            </span>
        <CustomBtn inverted onClick={() => addItem(item)}>Add to cart</CustomBtn>
        </div>
    </div>
    )
}
const mapDispatchToprops = (dispatch) => ({
    addItem:item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToprops)(CollectionItem)
