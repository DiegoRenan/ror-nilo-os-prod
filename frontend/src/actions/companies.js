import { LOAD_COMPANIES, COMPANY_CHANGED, COMPANY_ADDED }  from './actionTypes'

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
export const add = (company_name) => {
  console.log("Company: " + company_name)
  return [
    { type: COMPANY_ADDED, payload: api.addCompany( company(company_name) ) },
    loadCompanies()
  ]
}