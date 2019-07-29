import './Home.css'
import React, { Component } from 'react'

import Main from '../../templates/Main'
import TicketsList from '../../templates/TicketsList'

export default class Home extends Component {

  render() {
    return (
      <Main title="Home" >
        <div className="display-4">Ticktes</div>
        <TicketsList /> 
      </Main>
    )
  }
}
