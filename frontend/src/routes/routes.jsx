import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/screens/home/Home'
import MyTickets from '../components/screens/myTickets/MyTickets'
import ClosedTickets from '../components/screens/closedTickets/ClosedTickets'
import Company from '../components/screens/company/Company'
import CompanyUpdate from '../components/screens/company/CompanyUpdate'

export default props => (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/mytickets' component={MyTickets} />
      <Route path='/closedtickets' component={ClosedTickets} />
      <Route path='/companies' component={Company} />
      <Route path='/companyUpdate/:id' component={CompanyUpdate} />
      <Redirect from='*' to='/' />
    </Switch>
)
