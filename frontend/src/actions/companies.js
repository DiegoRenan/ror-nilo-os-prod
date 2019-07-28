import { LOAD_COMPANIES, COMPANY_CHANGED, COMPANY_ADDED }  from './actionTypes'

import api from '../services/api'
import { dispatch } from 'rxjs/internal/observable/pairs';

const company = data => {
  return (
    {
      data: {
        type: "companies",
        attributes: {
          name: data
        }
      }
    }
  )
}

// Load Companies
export const loadCompanies = () => {
  console.log(api.loadCompanies())
  return {
    type: LOAD_COMPANIES,
    payload: api.loadCompanies()
  }
}

//Get input valeu Company name
export const changeCompany = event => {
  console.log("Company: change")
  return {
    type: COMPANY_CHANGED,
    payload: event.target.value
  }
}

// create a Company
export const add = (company_name) => async(dispatch) => {
  let response = await api.addCompany( company(company_name) )
  dispatch({
    type: COMPANY_ADDED, payload: response 
  })
  dispatch(
    loadCompanies()
  )
}