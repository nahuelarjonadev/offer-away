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
  return fetch('/api/products')
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

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  payload: product,
});

export const subtractFromCart = (id) => ({
  type: types.SUBTRACT_FROM_CART,
  payload: id,
});

export const proceedToCheckout = () => ({
  type: types.PROCEED_TO_CHECKOUT,
});

export const exitCheckout = () => ({
  type: types.EXIT_CHECKOUT,
});

export const sendPurchase = (cart) => dispatch => {
  console.log('requestPurchase');
  dispatch(requestProducts());
  return fetch('/api/purchase', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(cart), // data can be `string` or {object}!
      headers:{
      'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(res => {
      // if (!isValidProducts(res)) throw new Error('something went wrong')
      return dispatch(acceptPurchase(res))
    })
    .catch(err => console.error(err));
}

export const requestPurchase = () => ({
  type: types.REQUEST_PURCHASE,
});

export const acceptPurchase = (resMsg) => dispatch => {
  dispatch(fetchProducts())
  return dispatch({
    type: types.ACCEPT_PURCHASE,
    payload: resMsg,
  });
};

export const setButtonText = () => ({
  type: types.SET_BUTTON_TEXT,
});

export const resetButtonText = () => ({
  type: types.RESET_BUTTON_TEXT,
});

export const gotoAddProduct = () => ({
  type: types.GOTO_ADD_PRODUCT,
});
