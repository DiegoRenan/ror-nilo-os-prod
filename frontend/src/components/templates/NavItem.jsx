import './NavItem.css'
import React from 'react'


export default props => 
  <a href={props.address}>
   <i className={`fa fa-${props.icon}`}></i> {props.title}
  </a>