import React from 'react';

function AddProductBtn(props) {
  return (
    <button id='addProductBtn' onClick={props.gotoAddProduct}>Add a Product</button>
  )
}

export default AddProductBtn;
