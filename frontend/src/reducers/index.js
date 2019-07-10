import { combineReducers } from 'redux'
import TicketsReducers from './TicketsReducers'

export default combineReducers({
  ticketsState: TicketsReducers
})