import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PRODUCTS_FAILURE, PROCEED_TO_CHECKOUT, EXIT_CHECKOUT, SET_BUTTON_TEXT, RESET_BUTTON_TEXT, GOTO_ADD_PRODUCT, EXIT_ADD_PRODUCT, POST_ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, GOTO_UPDATE_PRODUCT} from '../constants/actionTypes';

const initialState = {
  products: [{SKU: 1, product_name: 'product description', size: 0, inventory: '0', price: '0', category_name: 'category'}],
  fetchProductsStatus: '',
  postProductStatus: '',
  fetchProductsError: '',
  currentCategory: '',
  onCheckoutPage: false,
  onAddProductPage: false,
  buttonOneText: 'Add To Cart',
  buttonTwoText: 'Delete From Cart',
  productModalHeading: 'Add a Product',
}

const productsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUEST_PRODUCTS:
      return { ...state, fetchProductsStatus: 'pending' };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        fetchProductsStatus: 'success',
        products: payload
      }
    case REQUEST_PRODUCTS_FAILURE:
      return {
        ...state,
        fetchProductsStatus: 'failure',
        fetchProductsError: payload,
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
        buttonOneText: 'Update Product',
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
        productModalHeading: 'Add a Product',
      }
    case EXIT_ADD_PRODUCT:
      return {
        ...state,
        onAddProductPage: false,
      }
    case POST_ADD_PRODUCT:
      return {
        ...state,
        postProductStatus: 'Creating...'
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        postProductStatus: 'Successfully created!'
      }
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        postProductStatus: payload,
      }
    case GOTO_UPDATE_PRODUCT:
      return {
        ...state,
        onAddProductPage: true,
        productModalHeading: 'Update a Product',
      }
    default:
      return state;
  }
}

export default productsReducer;
