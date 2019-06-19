import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PRODUCTS_FAILURE, PROCEED_TO_CHECKOUT, EXIT_CHECKOUT } from '../constants/actionTypes';

const initialState = {
  products: [{SKU: 1, product_name: 'product description', size: 0, inventory: '0', price: '0', category_name: 'category'}],
  fetchProductsStatus: '',
  fetchProductsError: '',
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
    case PROCEED_TO_CHECKOUT:
      return {
        ...state,
        onCheckoutPage: true,
      }
    case EXIT_CHECKOUT:
      return {
        ...state,
        onCheckoutPage: false,
        sendPurchaseStatus: '',
      }
    default:
      return state;
  }
}

export default productsReducer;
