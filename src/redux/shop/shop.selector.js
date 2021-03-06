import {createSelector} from 'reselect'



const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollection = collectUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections?.[collectUrlParam] ?? null
        
    )

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const isCollectionLoading = createSelector(
    [selectShop],
    shop => shop.isLoading
)
export const errorMessage = createSelector(
    [selectShop],
    shop => shop.errorMessage
)
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );

