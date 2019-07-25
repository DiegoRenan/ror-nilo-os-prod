import React from 'react'

import Icon from './Icon'

export default props =>
  <button className={'btn btn-' + props.style} onClick={props.onClick}>
    <Icon icon={props.icon}></Icon>
  </button>