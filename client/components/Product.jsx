import React, {Component} from 'react'

class Product extends Component {
  render() {
    console.log(this.props.products);
    let productsArr = [];
    productsArr = this.props.products.map((product,i) => (
      <div className='product' key={i}>
        <img src={`/static/${product.SKU}.jpg`} width='45%' height="45%"/>
        <div id='description'>Description: {product.product_name} </div>
        <div className='text'>
          <div> Size: {product.size}</div>
          <div> In-Stock: {product.inventory}</div>
          <div> Price: ${product.price}</div>
        </div>
        <button id="addtocart" onClick={() => this.props.addToCart(product.SKU)}> Add to Cart</button>
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