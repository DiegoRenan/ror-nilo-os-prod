import './Input.css'
import React from 'react'

export default props =>
  <div className="form-group">
    <input { ...props.type} 
          className={'form-control ' + props.style}
          placeholder={props.placeholder}
          value={props.value} 
          onChange={props.onChange}/>

    <span className={`fa fa-${props.icon}`}></span>
  </div>