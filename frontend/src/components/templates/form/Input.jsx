import './Input.css'
import React from 'react'

export default props =>
  <div className="form-group">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text"> <i className={`fa fa-`+props.icon}></i> </span>
      </div>
      <input name={props.name} 
             className="form-control" 
             placeholder={props.placeholder} 
             type={props.type} />
    </div>
  </div>