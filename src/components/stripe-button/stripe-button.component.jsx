import React from 'react';
import StipeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const publishableKey = 'pk_test_51IGY0gFNTic22wGjaqpfVFE5kmWbK1FbjDMJkk0kBVABhJB8QUNearQbgIZCZQU4z8gKwrL3Zvwq5PNGfhZz0UwR00HDWqHmWS'
    const priceForStripe = price * 100
    const ontoken = token =>{
        console.log(token)
        alert('payment successful')
    }
    return(
        <StipeCheckout
        label ='paynow'
        name = 'Mandy Urban Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        discription= {`your total is $${price}`}
        amount={priceForStripe}
        panelLabel= 'pay now'
        token={ontoken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton 