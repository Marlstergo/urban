import React from 'react';
import './shop.style.scss';
import { Route } from 'react-router-dom'
// import SHOP_DATA from './shop.data';
import CollectionPage from '../collection-page/collection-page.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'


const ShopPage = ({match}) => (       
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId` } component={CollectionPage} />
    </div>
)


export default ShopPage