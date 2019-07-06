import './TicketsList.css'
import React from 'react'

import Icon from './Icon'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(ticket => (
        <tr key={list.id}>
          <td><Icon icon='circle-o'/></td>
          <td>{ ticket.title }</td>
          <td> Fulano </td>
          <td><Icon icon='users' /></td>
          <td><Icon icon='hourglass-half' /></td>
          <td><Icon icon='edit' /></td>
          <td><Icon icon='trash' /></td>
        </tr>
      )
    )
  }

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
        {renderRows()}
      </tbody>
    </table>
  )
}