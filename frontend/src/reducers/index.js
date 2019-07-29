import { combineReducers } from 'redux'
import TicketsReducers from './TicketsReducers'
import CompaniesReducers from './CompaniesReducers'
import AlertReducers from './AlertReducers'

export default combineReducers({
  ticketsState: TicketsReducers,
  companiesState: CompaniesReducers,
  alertState: AlertReducers
})