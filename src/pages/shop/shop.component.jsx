import React from 'react';
import './shop.style.scss';
import { Route } from 'react-router-dom'
// import SHOP_DATA from './shop.data';
import CollectionPageContainer from '../collection-page/collection.container'
import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container'
import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux'
import {fetchCollectionStart} from '../../redux/shop/shop.action'
import { errorMessage, } from '../../redux/shop/shop.selector'

// import WithSpinner from '../../components/with-spinner/with-spinner.component'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';


// const CollectionOverviewWithSpinner= WithSpinner(CollectionOverview)

class ShopPage extends React.Component{
    
    reactIsLit = null;
    
    componentDidMount(){

        const {updateCollections} = this.props
        updateCollections()
    }
    // componentWillUnmount(){
    //     this.unsubscribeFromSnapshot()
    // }

    render(){
    const {match} = this.props
    return (       
    <div className='shop-page'>
        <Route 
            exact 
            path={`${match.path}`} 
            component={CollectionsOverviewContainer}
        />
        <Route 
            exact
            path={`${match.path}/:collectionId`} 
            component={CollectionPageContainer}
        />
    </div>
)}
}


const mapsDispatchToProps= dispatch =>({
    updateCollections: () =>
    dispatch(fetchCollectionStart())
})

const mapStateToProps = createStructuredSelector({
    
    errorMessage: errorMessage
})

export default connect(mapStateToProps, mapsDispatchToProps)(ShopPage)