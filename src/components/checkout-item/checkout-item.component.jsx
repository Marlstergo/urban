import React from 'react';
import {connect} from 'react-redux'
import './checkout-item.styles.scss'
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.action'
const CheckoutItem = ({cartItem, addItem, clearItemFromCart, removeItem}) =>{
    const {imageUrl, name, quantity, price} = cartItem
    return(
    <div className='checkout-item'>
        <div className="image-container">
            <img src={imageUrl} alt="size"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span className='arrow' onClick={()=>{removeItem(cartItem)}}>&#10094;</span>
            <span className='value'> {quantity} </span>
            <span className='arrow' onClick={()=>{addItem(cartItem)}}>&#10095;</span>
        </span> 
        <span className="price">{price}</span>
        <div onClick={()=>clearItemFromCart(cartItem)} className='remove-button'>
            &#10005;
        </div>

    </div>
)}

const mapDispatchToProps = dispatch =>({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);