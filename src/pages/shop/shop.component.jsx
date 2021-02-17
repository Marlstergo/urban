import React from 'react';
import './shop.style.scss';
import { Route } from 'react-router-dom'
// import SHOP_DATA from './shop.data';
import CollectionPage from '../collection-page/collection-page.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux'
import {fetchCollectionStartAsync} from '../../redux/shop/shop.action'
import {isCollectionLoading, errorMessage} from '../../redux/shop/shop.selector'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const CollectionOverviewWithSpinner= WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component{
    
    unsubscribeFromSnapshot = null;
    
    componentDidMount(){

        const {updateCollections} = this.props
        updateCollections()
    }
    // componentWillUnmount(){
    //     this.unsubscribeFromSnapshot()
    // }

    render(){
    const {match} = this.props 
    const {isCollectionFetching} = this.props
    return (       
    <div className='shop-page'>
        <Route 
            exact 
            path={`${match.path}`} 
            render ={(props) => (<CollectionOverviewWithSpinner isLoading= {isCollectionFetching}  {...props}/>)} 
        />
        <Route 
            exact
            path={`${match.path}/:collectionId`} 
            render ={ (props) => <CollectionPageWithSpinner isloading = {isCollectionFetching} {...props}/>
        } 
        />
    </div>
)}
}


const mapsDispatchToProps= dispatch =>({
    updateCollections: collectionsMap =>
    dispatch(fetchCollectionStartAsync(collectionsMap))
})

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: isCollectionLoading,
    errorMessage: errorMessage
})

export default connect(mapStateToProps, mapsDispatchToProps)(ShopPage)