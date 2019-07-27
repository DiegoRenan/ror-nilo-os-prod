import { LOAD_COMPANIES, COMPANY_CHANGED, COMPANY_ADDED } from '../actions/actionTypes'

const INITIAL_STATE = { companies: [] }

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOAD_COMPANIES:
      let data = action.payload.data || []
      return {...state, companies: data }
    case COMPANY_CHANGED:
      return {...state, company: action.payload} 
    case COMPANY_ADDED:
      return {...state}
    default:
      return state
  }
}