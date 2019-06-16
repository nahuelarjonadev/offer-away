import { combineReducers, applyMiddleware } from 'redux';
import productsReducer from './productsReducer';


const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;