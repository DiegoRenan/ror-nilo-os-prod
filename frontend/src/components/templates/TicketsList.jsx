import './TicketsList.css'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadTickets } from '../../actions/tickets'

import Icon from './Icon'

class TicketsList extends Component {

  componentWillMount() {
    this.props.loadTickets()
  }

  renderRows() {
    let tickets = this.props.tickets || []
    return tickets.map(ticket => (
      <tr key={ticket.id}>
        <td><Icon icon='circle-o' /></td>
        <td>{ticket.title}</td>
        <td> Fulano </td>
        <td><Icon icon='users' /></td>
        <td><Icon icon='hourglass-half' /></td>
        <td><Icon icon='edit' /></td>
        <td><Icon icon='trash' /></td>
      </tr>
    ))
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Prio.</th>
            <th>Título</th>
            <th>Autor</th>
            <th> Resp </th>
            <th> - </th>
            <th> - </th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = store => ({ tickets: store.ticketsState.tickets })
const mapDispatchToProps = dispatch => bindActionCreators({ loadTickets }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
