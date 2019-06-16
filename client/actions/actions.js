import * as types from '../constants/actionTypes';

export const requestProducts = () => ({
  type: types.REQUEST_PRODUCTS,
})

export const receiveProducts = (json) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: json,
})

/**
 * Dispatch this in case of receiving invalid data or the request fails
 * @param {*} err error object
 */
export const requestProductsFailure = (err) => ({
  type: types.REQUEST_PRODUCTS_FAILURE,
  payload: err,
})

export const fetchProducts = () => dispatch => {
  console.log('fetchProducts');
  dispatch(requestProducts());
  return fetch('/api/productsa')
    .then(res => res.json())
    .then(res => {
      if (!isValidProducts(res)) throw new Error('something went wrong')
      return dispatch(receiveProducts(res))
    })
    .catch(err => dispatch(requestProductsFailure(err)))
}
function isValidProducts(res) {
  return Array.isArray(res);
}

