import cartActionTypes from './cart.type'

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})
export const addItem = item =>({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
export const hideCart = () =>({
    type: cartActionTypes.HIDE_CART
})
export const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})
export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})