import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Product from '../components/Product';

const mapStateToProps = store => ({
  products: store.products.products,
  fetchProductsStatus: store.products.fetchProductsStatus,
  fetchProductsError: store.products.fetchProductsError,
  //map our state to props
})
const mapDispatchtoProps = dispatch => ({
  fetchProducts: () => dispatch(actions.fetchProducts()),
  addToCart: (productId) => dispatch(actions.addToCart(productId)),
  subtractFromCart: (productId) => dispatch(actions.subtractFromCart(productId)),
})
class Catalog extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div id='catalogview'>
        <Product subtractFromCart={this.props.subtractFromCart} addToCart={this.props.addToCart} products={this.props.products}/>
    
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Catalog);