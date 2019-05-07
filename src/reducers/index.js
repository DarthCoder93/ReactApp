import { combineReducers } from 'redux'
import counter from './counter'
import global from './global'
import cart from './cart'

export default combineReducers({
  counter,
  global,
  cart
})
