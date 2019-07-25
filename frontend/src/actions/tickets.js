import { LOAD_TICKETS } from './actionTypes'
import api from '../services/api'

export const loadTickets = () => {
  console.log(api.loadTickets())
  return {
    type: LOAD_TICKETS,
    payload: api.loadTickets()
  }
}

