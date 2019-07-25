import { LOAD_COMPANIES } from '../actions/actionTypes'

const INITIAL_STATE = { companies: [] }

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOAD_COMPANIES:
      let data = action.payload.data || []
      return {...state, companies: data} 
    default:
      return state
  }
}