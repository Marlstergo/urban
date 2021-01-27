import React from 'react';
import './button.styles.scss'


const Button = ({children, inverted, isGoogleSignIn, ...otherProps}) =>(
    <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''}  custom-button`} {...otherProps}>
        {children}
    </button>
)

export default Button