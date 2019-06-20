import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PRODUCTS_FAILURE, PROCEED_TO_CHECKOUT, EXIT_CHECKOUT, SET_BUTTON_TEXT, RESET_BUTTON_TEXT, GOTO_ADD_PRODUCT, EXIT_ADD_PRODUCT } from '../constants/actionTypes';

const initialState = {
  products: [{SKU: 1, product_name: 'product description', size: 0, inventory: '0', price: '0', category_name: 'category'}],
  fetchProductsStatus: '',
  fetchProductsError: '',
  currentCategory: '',
  onCheckoutPage: false,
  onAddProductPage: false,
  buttonOneText: 'Add To Cart',
  buttonTwoText: 'Delete From Cart',
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
    case SET_BUTTON_TEXT:
      return {
        ...state,
        buttonOneText: 'Update Stock',
        buttonTwoText: 'Delete This Item',
      }
    case RESET_BUTTON_TEXT:
      return {
        ...state,
        buttonOneText: 'Add to Cart',
        buttonTwoText: 'Remove from Cart',
      }
    case GOTO_ADD_PRODUCT:
      return {
        ...state,
        onAddProductPage: true,
      }
    case EXIT_ADD_PRODUCT:
      return {
        ...state,
        onAddProductPage: false,
      }
    default:
      return state;
  }
}

export default productsReducer;
