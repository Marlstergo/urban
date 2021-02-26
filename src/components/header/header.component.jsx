import React from 'react';
// import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect'
import {selectHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector';
// import { createStructuredSelector } from 'reselect';
import {HeaderContainer, LogoContainer, LinksContainer, LinkContainer, OptionDiv} from './header.styles'
import { signOutUserStart } from '../../redux/user/user.action';



const Header = ({currentUser, hidden, signOut}) =>{
    
    return(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <LinksContainer>
            <LinkContainer to='/shop'>
                SHOP
            </LinkContainer>
            <LinkContainer to='/contact'>
                CONTACT
            </LinkContainer>
            
            {
                currentUser ?
                <OptionDiv onClick={() => signOut()}>SIGN OUT</OptionDiv>
                :
                <LinkContainer to='/sign-in'>SIGN IN</LinkContainer>
            }
            <CartIcon/>
        </LinksContainer>
        {
            hidden ?
            null :
            <CartDropdown/>
        }
        
    </HeaderContainer>
)}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})
const mapDispatchToProps = dispatch => ({
    signOut : () => dispatch(signOutUserStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)