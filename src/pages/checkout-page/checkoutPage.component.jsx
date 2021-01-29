import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import './checkoutPage.styles.scss'

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>descriopton</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>remove</span>
            </div>
        </div>
        {
            cartItems.map( (cartItem) =>
                <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
            )
        }
        <div className='total'>
            TOTAL: ${cartTotal}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)