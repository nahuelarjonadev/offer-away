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
});

const mapDispatchToProps = (dispatch) => ({
  setButtonText: () => dispatch(actions.setButtonText()),
  gotoAddProduct: () => dispatch(actions.gotoAddProduct()),
});

class Business extends Component {
  componentDidMount() {
    this.props.setButtonText();
  }

  render() {
    return (
      <div style={{textAlign: 'center', padding: '20px'}}>
        {this.props.onAddProductPage && <AddProduct />}
        <AddProductBtn gotoAddProduct={this.props.gotoAddProduct} />
        <AddProductBtn gotoAddProduct={this.props.gotoAddProduct} />
        <Catalog buttonOneText={this.props.buttonOneText} buttonTwoText={this.props.buttonTwoText} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Business);
