import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = (values) => {
  fetch('/businessapi/create-product', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(values), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) console.log(res.result);
    })
    .catch((err) => console.log(err));
}

// TODO: fetch categories from server for dropdown instead of hardcoding
function AddProduct() {
  return(
    <div className="overlay">
      <div className="modal">
        <h2>Add a Product</h2>
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
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    </div>
  )
}

export default AddProduct;
