import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PRODUCTS_FAILURE, ADD_TO_CART, SUBTRACT_FROM_CART } from '../constants/actionTypes';

const initialState = {
  products: [{name: 'dummy'}, { name: 'shoe'}],
  totalItemsInCart: 0,
  fetchProductsStatus: '',
  fetchProductsError: '',
  cart: [],
  currentCategory: '',
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return { ...state, fetchProductsStatus: 'pending' };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        fetchProductsStatus: 'success',
        products: action.payload
      }
    case REQUEST_PRODUCTS_FAILURE:
      return {
        ...state,
        fetchProductsStatus: 'failure',
        fetchProductsError: action.payload,
      }
    default:
      return state;
  }
}

export default productsReducer;