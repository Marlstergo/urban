import React from 'react';
import './shop.style.scss';
import { Route } from 'react-router-dom'
// import SHOP_DATA from './shop.data';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'


const ShopPage = ({match}) => (       
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
            
    </div>
)


export default ShopPage