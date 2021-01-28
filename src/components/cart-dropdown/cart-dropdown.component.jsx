import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux';

import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map( cartItem => <CartItem className='cart-item' key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <Button inverted>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});
        
export default connect(mapStateToProps)(CartDropdown);