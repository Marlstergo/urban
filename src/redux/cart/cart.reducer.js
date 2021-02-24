import cartActionTypes from './cart.type'
import {addItemToCart, removeItem} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.HIDE_CART:
            return{
                ...state,
                hidden: true
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        default:
            return state;
        
        }
    } 

export default cartReducer;