import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

export default props => 
  <aside className="menu-area">
    <nav className="menu">
      <NavItem icon="inbox" title="Caixa de entrada" address="/" />
      <NavItem icon="tasks" title="Meus Tickets" address="#/mytickets" />
      <NavItem icon="lock" title="Tickets Fechados" address="#/closedtickets" />
    </nav>
  </aside>