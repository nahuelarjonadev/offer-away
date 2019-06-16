import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  products: store.products.products,
  fetchProductsStatus: store.products.fetchProductsStatus,
  fetchProductsError: store.products.fetchProductsError,
  //map our state to props
})
const mapDispatchtoProps = dispatch => ({
  fetchProducts: () => dispatch(actions.fetchProducts()),
})
class Catalog extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log(this.props.products);
    let productsArr = [];
    if (this.props.fetchProductsStatus === 'success') {
      productsArr = this.props.products.map(product => <div className='product'>{product.product_name}</div>);
    }
    return (
      <div id='catalog'>
        { productsArr }
        { this.props.fetchProductsStatus === 'pending' && <p>Loading...</p>}
        { this.props.fetchProductsStatus === 'success' && <p>Succeded</p>}
        { this.props.fetchProductsStatus === 'failure' && <p>Failed :(</p>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Catalog);