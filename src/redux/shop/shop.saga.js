import {call, put, takeLatest} from 'redux-saga/effects'

import ShopActionTyepes from './shop.types'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util'
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';

export function* fetchCollectionStartAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
            )
            yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        put(fetchCollectionFailure(error))
    }
    
    // const collectionRef = firestore.collection('collections');
    // dispatch(fetchCollectionStart())

    // collectionRef
    //     .get()
    //     .then(snapshot =>{
    //         const collectionMap = convertCollectionsSnapshotToMap(snapshot)
    //         // updateCollections(collectionMap);
    //         dispatch(fetchCollectionSuccess(collectionMap))

    //         // console.log(collectionMap)
    //         // this.setState({loading : false})

    //     })
    //     .catch( err =>{
    //         dispatch(fetchCollectionFailure(err))

    //     }

    //     )
}

export function* fetchCollectionStart (){ 
    yield (takeLatest(ShopActionTyepes.FETCH_COLLECTION_START, fetchCollectionStartAsync))
}