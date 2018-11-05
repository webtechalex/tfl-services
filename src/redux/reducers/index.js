import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

import createDataReducer from './createDataReducer/createDataReducer'

const reducer = combineReducers({
  services: createDataReducer('services'),
  bikes: createDataReducer('bikes')
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store