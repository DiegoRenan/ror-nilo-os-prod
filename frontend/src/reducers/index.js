import { combineReducers } from 'redux'
import TicketsReducers from './TicketsReducers'
import CompaniesReducers from './CompaniesReducers'

export default combineReducers({
  ticketsState: TicketsReducers,
  companiesState: CompaniesReducers
})