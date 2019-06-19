import { ADD_TO_CART, SUBTRACT_FROM_CART, ACCEPT_PURCHASE, REQUEST_PURCHASE } from '../constants/actionTypes';

const initialState = {
  totalItemsInCart: 0,
  cart: {},
  sendPurchaseStatus: '',
  sendPurchaseError: '',
}

const productsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART: {
      const product = payload;
      if (!isValidProduct(product)) return state;
      const SKU = product.SKU;
      let inStock = product ? product.inventory : 0;
      let newQuantity = state.cart[SKU] ? state.cart[SKU] + 1 : 1;
      if (newQuantity > inStock) return state;
      return {
        ...state,
        totalItemsInCart: state.totalItemsInCart + 1,
        cart: Object.assign(state.cart, { [SKU]: newQuantity })
      }
    }
    case SUBTRACT_FROM_CART: {
      const SKU = payload;
      if (!isValidSKU(SKU)) return state;
      const newQuantity = state.cart[SKU] ? state.cart[SKU] - 1 : -1;
      if (newQuantity < 0) return state;
      const cartClone = JSON.parse(JSON.stringify(state.cart));
      if (newQuantity === 0) delete cartClone[[SKU]];
      else Object.assign(cartClone, { [SKU]: newQuantity });
      return {
        ...state,
        totalItemsInCart: state.totalItemsInCart - 1,
        cart: cartClone,
      }
    }
    case REQUEST_PURCHASE:
      return {
        ...state,
        sendPurchaseStatus: 'Loading...',
      }
    case ACCEPT_PURCHASE:
      return {
        ...state,
        sendPurchaseStatus: payload,
        totalItemsInCart: 0,
        cart: {},
      }
    default:
      return state;
  }
}

export default productsReducer;

function isValidProduct(product) {
  return product && isValidSKU(product.SKU);
}

function isValidSKU(SKU) {
  return typeof SKU === 'number' && SKU > 0;
}
