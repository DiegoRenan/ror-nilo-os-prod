import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import MyTickets from '../components/myTickets/MyTickets'
import ClosedTickets from '../components/closedTickets/ClosedTickets'

export default props => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/mytickets' component={MyTickets} />
    <Route path='/closedtickets' component={ClosedTickets} />
    <Redirect from='*' to='/' />
  </Switch>
)
