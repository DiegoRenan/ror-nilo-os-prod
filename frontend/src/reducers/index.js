import { combineReducers } from 'redux'

import TicketsReducers from './TicketsReducers'
import CompaniesReducers from './CompaniesReducers'
import AlertReducers from './AlertReducers'
import AuthReducers from '../auth/authReducer'

export default combineReducers({
  ticketsState: TicketsReducers,
  companiesState: CompaniesReducers,
  alertState: AlertReducers,
  auth: AuthReducers
})