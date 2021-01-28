import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector'

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

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
        
export default connect(mapStateToProps)(CartDropdown);