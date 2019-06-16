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
    
    const productsArr = this.props.products.map(product => product.name);
    return (
      <div id='catalog'>
        {productsArr}
        { this.props.fetchProductsStatus === 'pending' && <p>Loading...</p>}
        { this.props.fetchProductsStatus === 'success' && <p>Succeded</p>}
        { this.props.fetchProductsStatus === 'failure' && <p>Failed :( {this.props.fetchProductsError }</p>}
      </div>
    )
  }
} 

export default connect(mapStateToProps, mapDispatchtoProps)(Catalog);

//working version without redux implementation
// function Catalog() {
//   const [items, setItems] = useState([]);

  // fetch('/api/products')
  //   .then(res => res.json())
  //   .then(resItems => {
  //     const itemsArr = Array.isArray(resItems) ? resItems : Object.keys(resItems);
  //     setItems(itemsArr);
  //   })
  
//   return (
//     <div id='catalog'>
//       {items}
//     </div>
//   );
// }

//export default Catalog;
