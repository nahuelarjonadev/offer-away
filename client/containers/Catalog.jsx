import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Product from '../components/Product';

const mapStateToProps = store => ({
  products: store.products.products,
  fetchProductsStatus: store.products.fetchProductsStatus,
  fetchProductsError: store.products.fetchProductsError,
  //map our state to props
})
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(actions.fetchProducts()),
})
class Catalog extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log(this.props.button1Action);
    return (
      <div id='catalogview'>
        <Product button1Action={this.props.button1Action} button2Action={this.props.button2Action}
        products={this.props.products} buttonOneText={this.props.buttonOneText} buttonTwoText={this.props.buttonTwoText}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
