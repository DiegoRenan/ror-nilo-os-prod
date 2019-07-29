import { CRUD_EXECUTED } from '../actions/actionTypes'

const INITIAL_STATE = { http_code: '', message: '' }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CRUD_EXECUTED:
      return {
        ...state, 
        http_code: action.payload.http_code, 
        message: action.payload.message
      }
    default:
      return state
  }
}