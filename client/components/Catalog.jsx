import React, {Component} from 'react'

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [<div key={1}>shoe1</div>, <div>shoe2</div>,<div>shoe3</div>]
    }
  }

  render() {
    return (
      <div id='catalog'>
        {this.state.items}
      </div>
    )
  }
} 

export default Catalog;

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
