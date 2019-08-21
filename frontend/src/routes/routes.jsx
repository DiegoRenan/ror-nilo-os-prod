import React from 'react'
import {Route, Redirect, Switch } from 'react-router-dom'

import App from '../main/App'
import MyTickets from '../components/screens/myTickets/MyTickets'
import ClosedTickets from '../components/screens/closedTickets/ClosedTickets'
import Company from '../components/screens/company/Company'
import CompanyUpdate from '../components/screens/company/CompanyUpdate'
import CompanyShow from '../components/screens/company/CompanyShow'

export default props => (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/mytickets' component={MyTickets} />
      <Route path='/closedtickets' component={ClosedTickets} />
      <Route path='/companies' component={Company} />
      <Route path='/companyUpdate/:id' component={CompanyUpdate} />
      <Route path='/companyShow/:id' component={CompanyShow} />
      <Redirect from='*' to='/' />
    </Switch>
)
