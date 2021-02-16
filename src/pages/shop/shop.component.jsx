import React from 'react';
import './shop.style.scss';
import { Route } from 'react-router-dom'
// import SHOP_DATA from './shop.data';
import CollectionPage from '../collection-page/collection-page.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.action'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const CollectionOverviewWithSpinner= WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            loading: true
        }
    }
    unsubscribeFromSnapshot = null;
    
    componentDidMount(){

        const {updateCollections} = this.props

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            // setTimeout(function(){updateCollections(collectionMap); }, 5000)
            updateCollections(collectionMap);
            // console.log(collectionMap)
            this.setState({loading : false})

        })
    }

    render(){
    const {match} = this.props 
    const {loading} = this.state
    return (       
    <div className='shop-page'>
        <Route 
            exact 
            path={`${match.path}`} 
            render ={(props) => (<CollectionOverviewWithSpinner isLoading= {loading}  {...props}/>)} 
        />
        <Route 
            exact
            render ={ (propss) => (<CollectionPageWithSpinner isloading = {loading} {...propss}/>)} 
        />
    </div>
)}
}


const mapsDispatchToProps= dispatch =>({
    updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapsDispatchToProps)(ShopPage)