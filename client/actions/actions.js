import * as types from '../constants/actionTypes';

export const requestProducts = () => ({
  type: types.REQUEST_PRODUCTS,
})

export const receiveProducts = (json) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: json,
})

export const requestProductsFailure = (err) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: err,
})

export const fetchProducts = () => dispatch => {
  dispatch(requestProducts);
  return fetch('/api/products')
    .then(res => res.json())
    .then(res => dispatch(receiveProducts(res)))
    .catch(err => dispatch(requestProductsFailure(err)))
}
