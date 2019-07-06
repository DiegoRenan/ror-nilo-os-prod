import './Home.css'
import React, { Component } from 'react'

import api from '../../services/api'
import Main from '../templates/Main'
import TicketsList from '../templates/TicketsList'

export default class Home extends Component { 
  constructor(props) {
    super(props)
    this.state = {list: []}

    this.refresh()
  }

  refresh() {
    api.loadTickets().then(
      resp => this.setState({ ...this.state, list: resp.data})
    )
  }
  
  render() {
    return (
      <Main title="Home" >
        <div className="display-4">Ticktes</div>
        <TicketsList list={this.state.list}/>
      </Main>
    )
  }
}