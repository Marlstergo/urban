import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util'
import ShopAcionTypes from './shop.types';

export const fetchCollectionStart = () =>({
    type: ShopAcionTypes.FETCH_COLLECTION_START,
})
export const fetchCollectionSuccess = (collectionMap) =>({
    type: ShopAcionTypes.FETCH_COLLECTION_SUCCESS,
    payload : collectionMap
})
export const fetchCollectionFailure = (errorMessage) =>({
    type: ShopAcionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () =>{
    return dispatch =>{
        // const {updateCollections} = this.props

        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart())

        collectionRef
            .get()
            .then(snapshot =>{
                const collectionMap = convertCollectionsSnapshotToMap(snapshot)
                // updateCollections(collectionMap);
                dispatch(fetchCollectionSuccess(collectionMap))

                // console.log(collectionMap)
                // this.setState({loading : false})

            })
            .catch( err =>{
                dispatch(fetchCollectionFailure(err))

            }

            )
    }
}