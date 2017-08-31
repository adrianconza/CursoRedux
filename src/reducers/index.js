import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import productList from './productListReducers'
import activeProduct from './activeProductReducers'
import cart from './cartReducers'

const rootReducer = combineReducers({
  routing: routerReducer,
  productList,
  activeProduct,
  cart
})

export default rootReducer
