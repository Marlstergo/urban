import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selector'
import './collection-page.styles.scss'
import {connect} from 'react-redux'

const CollectionPage = ({collection}) =>
{
    console.log(collection)
    return(
    <div className='category'> 
        <div className="name">
            <h2>{collection.title}</h2>
        </div>
        <div className='items'>
        {
            collection.items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                )
            )
        }
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)