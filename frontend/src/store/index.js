import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from '../reducers'
import multi from 'redux-multi'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default applyMiddleware(multi, promise)(createStore)(reducers, devTools)