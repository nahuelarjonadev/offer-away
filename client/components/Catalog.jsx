import React from 'react';

const items = [
  <div>item</div>,
  <div>item</div>,
  <div>item</div>,
];

function Catalog() {
  return (
    <div id='catalog'>
      {items}
    </div>
  );
}

export default Catalog;