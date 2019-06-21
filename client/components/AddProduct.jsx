import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from "react-redux";
import { exitAddProduct, addProduct } from '../actions/actions';

const mapStateToProps = (store) => ({
  SKU: store.products.currentSKUUpdating,
});

const mapDispatchToProps = (dispatch) => ({
  exitAddProduct: () => dispatch(exitAddProduct()),
});

// TODO: fetch categories from server for dropdown instead of hardcoding
function AddProduct({sku, status, onSubmit, productModalHeading, postProductStatus, exitAddProduct, addProduct}) {
  return(
    <div className="overlay">
      <div className="modal">
        <button onClick={exitAddProduct}>exit</button>
        <h2>{productModalHeading}</h2>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Product Name</label>
                <Field name="productName" component="input" type="text" />
              </div>
              <div>
                <label>Category</label>
                <Field name="category" component="select" >
                  <option />
                  <option value={1}>Adidas</option>
                  <option value={2}>Nike</option>
                  <option value={3}>Puma</option>
                  <option value={4}>Air Jordan</option>
                  <option value={5}>Off-White</option>
                </Field>
              </div>
              <div>
                <label>Size</label>
                <Field name="size" component="input" type="text" />
              </div>
              <div>
                <label>Available Inventory</label>
                <Field name="inventory" component="input" type="text" />
              </div>
              <div>
                <label>Price</label>
                <Field name="price" component="input" type="text" />
              </div>
              <div style={{display: 'none'}}>
                <label>SKU</label>
                <Field name="SKU" component="input" type="text" default={sku} />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        />
        <p>{status}</p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
