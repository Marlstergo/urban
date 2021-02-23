import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';
import {withRouter} from 'react-router-dom'


const CollectionPreview = ({title, items, routeName, history, match }) =>(
    <div className='collection-preview'>
        <h1 className='title' onClick={() =>(history.push(`${match.url}/${routeName}`))}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item , idx) => idx < 4)
                .map((item) => (
                    <div key={item.id} className='container' item={item}>
                        {/* {item.imageUrl}
                        {item.name}
                        {item.price}<br></br> */}
                        
                        <CollectionItem key={item.id} item={item}/>
                    </div>
            ))}

        </div>        
    </div>
)

export default withRouter(CollectionPreview);