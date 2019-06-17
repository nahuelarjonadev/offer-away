import React, {Component} from 'react'
import { connect } from 'react-redux';



class Product extends Component {
  render() {
    console.log(this.props.products);
    let productsArr = [];
    productsArr = this.props.products.map((product,i) => <div className='product' key={i}>
    <img src="https://cache.mrporter.com/images/products/1093121/1093121_mrp_e1_m2.jpg" width='45%' height="auto"/>
    <div id='description'>Description: {product.product_name} </div>
    <div className='text'>
    <div> Size: {product.size}</div>
    <div> In-Stock: {product.inventory}</div>
    <div> Price: ${product.price}</div>
    </div>
    <button id="addtocart"> Add to Cart</button>
    </div>);
 
    return (
      <div id='catalog'>
        {productsArr}
        
      </div>
    )
  }
}

export default Product;