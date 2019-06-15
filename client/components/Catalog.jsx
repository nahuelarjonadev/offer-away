import React, { useState } from 'react';

function Catalog() {
  const [items, setItems] = useState([]);

  fetch('/api/products')
    .then(res => res.json())
    .then(resItems => {
      setItems(Object.keys(resItems));
    })
  
  return (
    <div id='catalog'>
      {items}
    </div>
  );
}

export default Catalog;