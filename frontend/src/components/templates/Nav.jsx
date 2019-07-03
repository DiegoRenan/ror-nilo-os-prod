import './Nav.css'
import React from 'react'

import NavItem from './NavItem'
import DropMenu from './DropMenu'

export default props => 
  <aside className="menu-area">
    <nav className="menu">
      <NavItem icon="inbox" title="Caixa de entrada" address="#/" />
      <NavItem icon="tasks" title="Meus Tickets" address="#/mytickets" />
      <NavItem icon="lock" title="Tickets Fechados" address="#/closedtickets" />
      
      <DropMenu title="Filters" icon="chevron-down">
          <li className="nav-item">
            <NavItem icon="filter" title="Delegadas a mim" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="filter" title="Prioridade 1" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="filter" title="Prioridade 2" address="#/" />
          </li>
      </DropMenu>

      <DropMenu title="Administrativo" icon="chevron-down">
          <li className="nav-item">
            <NavItem icon="" title="Usuários" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="" title="Departamentos" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="" title="Setores" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="" title="Serviços" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="" title="Status" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="" title="Permissões" address="#/" />
          </li>
          <li className="nav-item">
            <NavItem icon="" title="Funções" address="#/" />
          </li>
      </DropMenu>

    </nav>
  </aside>