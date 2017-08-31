import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SAVE_PRODUCT_INIT,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE
} from './types'

import API from '../api'

export function fetchProductsSucess (products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export function fetchProductSucess (product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  }
}

export function fetchProductFailure (error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}

export function saveProductSucess () {
  return {
    type: SAVE_PRODUCT_SUCCESS
  }
}

export function saveProductFailure (error) {
  return {
    type: SAVE_PRODUCT_FAILURE,
    payload: error
  }
}

export function fetchProducts () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRODUCTS_INIT
      }
    })

    try {
      const data = await API.products.getAll()
      return dispatch(fetchProductsSucess(data.products))
    } catch (e) {
      return dispatch(fetchProductsFailure(e))
    }
  }
}

export function fetchProduct (productId) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRODUCT_INIT
      }
    })

    try {
      const data = await API.products.getSingle(productId)
      return dispatch(fetchProductSucess(data.product))
    } catch (e) {
      return dispatch(fetchProductFailure(e))
    }
  }
}

export function saveProduct (product) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: SAVE_PRODUCT_INIT
      }
    })

    try {
      await API.products.save(product)
      return dispatch(saveProductSucess())
    } catch (e) {
      return dispatch(saveProductFailure(e))
    }
  }
}
