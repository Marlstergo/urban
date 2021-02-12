import SHOP_DATA from '../../pages/shop/shop.data';
import ShopAcionTypes from './shop.types';
const INITIAL_STATE ={
    collections: SHOP_DATA
}

const shopReducer = (state= INITIAL_STATE, action) =>{
    switch (action.type){
        case ShopAcionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
    
}

export default shopReducer;