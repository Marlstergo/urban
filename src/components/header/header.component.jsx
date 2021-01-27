import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-item.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



const Header = ({currentUser, hidden}) =>(
    <div onClick={console.log("fffffff?!")} className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/sign-in'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ?
            null :
            <CartDropdown/>
        }
        
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) =>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header)