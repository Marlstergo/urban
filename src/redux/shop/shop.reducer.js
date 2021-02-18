import ShopAcionTypes from './shop.types';
const INITIAL_STATE ={
    collections: null,
    isLoading: false,
    errorMessage: undefined
    // collectionLoaded: true
}

const shopReducer = (state= INITIAL_STATE, action) =>{
    switch (action.type){
        case ShopAcionTypes.FETCH_COLLECTION_START:
            return{
                ...state,
                isLoading: true
            }
        case ShopAcionTypes.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                collections: action.payload,
                isLoading: false,
                // collectionLoaded: false
            }
        case ShopAcionTypes.FETCH_COLLECTION_FAILURE:
            return{
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
    
}

export default shopReducer;