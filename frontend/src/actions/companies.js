import { LOAD_COMPANIES, COMPANY_CHANGED, COMPANY_ADDED , GET_COMPANY}  from './actionTypes'

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

const hiddenAlert = (dispatch) => {
  setTimeout(() => {
    dispatch(
      alert({hidden: 'hidden' })
    )
  }, 5000);
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
  console.log("Response:" + response)
  dispatch({
    type: COMPANY_ADDED, payload: response 
  })
  dispatch(
    loadCompanies()
  )
  
  let status, statusText
  response.status === 201 && response.statusText === "Created" ? status = "success" : status = "error"
  status === "success" ? statusText = "Salvo" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )

  hiddenAlert(dispatch)
}

// get a Company
export const getCompany = (company_id) => {
  
  return{ 
    type: GET_COMPANY,
    payload: api.getCompany(company_id)
  }
  
}

// delete a Company
export const remove = (company_id) => async(dispatch) => {
  let response = await api.deleteCompany(company_id)
  console.log(response)
  dispatch(
    loadCompanies()
  )

  let status = "error", statusText = "Error"
  response.status === 204 && response.statusText === "No Content" ? status = "success" : status = "error"
  status === "success" ? statusText = "Deletado" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )

  hiddenAlert(dispatch)
}