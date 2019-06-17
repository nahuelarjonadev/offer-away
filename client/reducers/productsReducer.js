import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PRODUCTS_FAILURE, ADD_TO_CART, SUBTRACT_FROM_CART, PROCEED_TO_CHECKOUT, EXIT_CHECKOUT, ACCEPT_PURCHASE, REQUEST_PURCHASE } from '../constants/actionTypes';

const initialState = {
  products: [{name: 'dummy'}, { name: 'shoe'}],
  totalItemsInCart: 0,
  fetchProductsStatus: '',
  fetchProductsError: '',
  cart: {},
  currentCategory: '',
  onCheckoutPage: false,
  sendPurchaseStatus: '',
  sendPurchaseError: '',
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
      const SKU = action.payload;
      const product = Object.values(state.products).filter(p => p.SKU == SKU)[0];
      const inStock = product ? product.inventory : 0;
      const newQuantity = state.cart[SKU] ? state.cart[SKU] + 1 : 1;
      if (newQuantity > inStock) return state;
      return {
        ...state,
        totalItemsInCart: state.totalItemsInCart + 1,
        cart: Object.assign(state.cart, { [SKU]: newQuantity })
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
    case REQUEST_PURCHASE:
      return {
        ...state,
        sendPurchaseStatus: 'Loading...',
      }
    case ACCEPT_PURCHASE:
      return {
        ...state,
        sendPurchaseStatus: action.payload,
      }
    default:
      return state;
  }
}

export default productsReducer;