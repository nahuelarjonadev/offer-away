import React, {Component} from 'react'
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  products: store.products.products,
  //map our state to props
})
const mapDispatchtoProps = dispatch => ({
  //map dispatch functions
})
class Catalog extends Component {
  render() {
    const productsArr = this.props.products.map(product => product.name);
    return (
      <div id='catalog'>
        {productsArr}
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

