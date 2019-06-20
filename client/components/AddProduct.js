import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = (values) => {
  const body = JSON.stringify(values);
  fetch('http://localhost:3000/businessapi/addProduct', {
    method: 'POST',
    body,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) console.log(res.result);
      else throw new Error('Unsuccessful post');
    })
    .catch((err) => console.log(err));
};

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
                <Field name="category" component="input" type="text" />
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
