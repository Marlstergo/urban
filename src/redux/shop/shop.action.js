import ShopAcionTypes from './shop.types';

export const updateCollections = (collectionMap) =>({
    type: ShopAcionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})