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
      let SKU = action.payload;
      let product = Object.values(state.products).filter(p => p.SKU == SKU)[0];
      let inStock = product ? product.inventory : 0;
      let newQuantity = state.cart[SKU] ? state.cart[SKU] + 1 : 1;
      if (newQuantity > inStock) return state;
      return {
        ...state,
        totalItemsInCart: state.totalItemsInCart + 1,
        cart: Object.assign(state.cart, { [SKU]: newQuantity })
      }
    case SUBTRACT_FROM_CART:
      SKU = action.payload;
      product = Object.values(state.products).filter(p => p.SKU == SKU)[0];
      // inStock = product ? product.inventory : 0;
      newQuantity = state.cart[SKU] ? state.cart[SKU] - 1 : 0;
      if (newQuantity < 0) return state;
      const cartClone = JSON.parse(JSON.stringify(state.cart));
      if (newQuantity === 0) delete cartClone[SKU];
      else Object.assign(cartClone, { [SKU]: newQuantity });
      return {
        ...state,
        totalItemsInCart: state.totalItemsInCart - 1,
        cart: cartClone,
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
    case REQUEST_PURCHASE:
      return {
        ...state,
        sendPurchaseStatus: 'Loading...',
      }
    case ACCEPT_PURCHASE:
      return {
        ...state,
        sendPurchaseStatus: action.payload,
        totalItemsInCart: 0,
        cart: {},
      }
    default:
      return state;
  }
}

export default productsReducer;