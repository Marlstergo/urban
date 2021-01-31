import React from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import {selectSections} from '../../redux/directory/directory.selector'
import {createStructuredSelector} from 'reselect';

import './directory.styles.scss';

const Directory = ({sections}) =>(
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} number={id} {...otherSectionProps}/>
    ))}
  </div>
);
  

const mapStateToProps= () =>createStructuredSelector({
  sections: selectSections
})
export default connect(mapStateToProps)(Directory);
