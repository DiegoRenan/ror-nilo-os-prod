import './Input.css'
import React from 'react'

export default props =>
  <input type={props.type} 
         className={'form-control ' + props.style}
         placeholder={props.placeholder}
         value={props.value} 
         onChange={props.onChange}/>