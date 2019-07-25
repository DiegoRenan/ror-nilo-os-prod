import { LOAD_COMPANIES }  from './actionTypes'

import api from '../services/api'

export const loadCompanies = () => {
  console.log(api.loadCompanies())
  return {
    type: LOAD_COMPANIES,
    payload: api.loadCompanies()
  }
}