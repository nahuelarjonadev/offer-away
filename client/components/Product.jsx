import React, {Component} from 'react'

class Product extends Component {
  render() {
    let productsArr = [];
    productsArr = this.props.products.map((product,i) => (
      <div className='product' key={i} style={{ padding: 20, borderBottom: "solid 1px #E8E8E8" }}>
        <img src={`/static/productImages/${product.SKU}.jpg`} width='45%' height="45%"/>
        <div id='description'>Description: {product.product_name} </div>
        <div className='text'>
          <div> Size: {product.size}</div>
          <div> In-Stock: {product.inventory}</div>
          <div> Price: ${product.price}</div>
        </div>
        <button id="addtocart" onClick={() => this.props.button1Action(product)}>{this.props.buttonOneText}</button>
        <button id="subtractFromCart" onClick={() => this.props.button2Action(product.SKU)}>{this.props.buttonTwoText}</button>
      </div>
    ));

    return (
      <div id='catalog'>
        {productsArr}
      </div>
    )
  }
}

export default Product;
