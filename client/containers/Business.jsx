import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import AddProduct from '../components/AddProduct';
import AddProductBtn from '../components/AddProductBtn';

const mapStateToProps = (store) => ({
  buttonOneText: store.products.buttonOneText,
  buttonTwoText: store.products.buttonTwoText,
  onAddProductPage: store.products.onAddProductPage,
  creatingProduct: store.products.creatingProduct,
  postProductStatus: store.products.postProductStatus,
  updateProductStatus: store.products.updateProductStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setButtonText: () => dispatch(actions.setButtonText()),
  gotoAddProduct: () => dispatch(actions.gotoAddProduct()),
  button1Action: (product) => dispatch(actions.gotoUpdateProduct(product)),
  addProduct: (values) => dispatch(actions.addProduct(values)),
  updateProduct: (values) => dispatch(actions.updateProduct(values)),
});

class Business extends Component {
  componentDidMount() {
    this.props.setButtonText();
  }

  render() {
    return (
      <div style={{textAlign: 'center', padding: '20px'}}>
        {this.props.onAddProductPage && <AddProduct onSubmit={this.props.creatingProduct ? this.props.addProduct : this.props.updateProduct}
        productModalHeading={this.props.creatingProduct ? 'Add a Product' : 'Update a Product'}
        status={this.props.creatingProduct ? this.props.postProductStatus : this.props.updateProductStatus} />}
        <AddProductBtn gotoAddProduct={this.props.gotoAddProduct} />
        <Catalog buttonOneText={this.props.buttonOneText} buttonTwoText={this.props.buttonTwoText}
        button1Action={this.props.button1Action} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Business);
