import React from 'react';
import './shop.style.scss';
import { Route } from 'react-router-dom'
// import SHOP_DATA from './shop.data';
import CollectionPage from '../collection-page/collection-page.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.action'

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;
    
    componentDidMount(){

        const {updateCollections} = this.props

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            
            updateCollections(collectionMap);

        }
            
        )
    }



    render(){
    const {match} = this.props 
    return (       
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId` } component={CollectionPage} />
    </div>
)}
}


const mapsDispatchToProps= dispatch =>({
    updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapsDispatchToProps)(ShopPage)