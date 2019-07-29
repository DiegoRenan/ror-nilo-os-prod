import { LOAD_COMPANIES, COMPANY_CHANGED, COMPANY_ADDED }  from './actionTypes'

import alert from './alert'
import api from '../services/api'

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
  console.log(response)
  dispatch({
    type: COMPANY_ADDED, payload: response 
  })
  dispatch(
    loadCompanies()
  )
  dispatch(
    alert({ http_code: response.status, message: response.statusText })
  )
}