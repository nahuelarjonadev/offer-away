import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Product from './Product';

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
    //console.log(this.props.products);
    // let productsArr = [];
    // // only map products in case the fetch is successfull
    // if (this.props.fetchProductsStatus === 'success') {
    //   productsArr = this.props.products.map((product,i) => <div className='product' key={i}>{product.product_name}</div>);
    // }
    return (
      <div id='catalogview'>
        <Product subtractFromCart={this.props.subtractFromCart} addToCart={this.props.addToCart} products={this.props.products}/>
    
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Catalog);