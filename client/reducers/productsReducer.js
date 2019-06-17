import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PRODUCTS_FAILURE, ADD_TO_CART, SUBTRACT_FROM_CART, PROCEED_TO_CHECKOUT, EXIT_CHECKOUT } from '../constants/actionTypes';

const initialState = {
  products: [{name: 'dummy'}, { name: 'shoe'}],
  totalItemsInCart: 0,
  fetchProductsStatus: '',
  fetchProductsError: '',
  cart: {},
  currentCategory: '',
  onCheckoutPage: false,
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
    case ADD_TO_CART:
      const sku = action.payload;
      const newQuantity = state.cart[sku] ? state.cart[sku] + 1 : 1;
      return {
        ...state,
        totalItemsInCart: state.totalItemsInCart + 1,
        cart: Object.assign(state.cart, { [sku]: newQuantity })
      }
    case PROCEED_TO_CHECKOUT:
      return {
        ...state,
        onCheckoutPage: true,
      }
    case EXIT_CHECKOUT:
      return {
        ...state,
        onCheckoutPage: false,
      }
    default:
      return state;
  }
}

export default productsReducer;