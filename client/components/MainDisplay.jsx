import React from 'react';
import Catalog from '../containers/Catalog';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  button1Action: (productId) => dispatch(actions.addToCart(productId)),
  button2Action: (productId) => dispatch(actions.subtractFromCart(productId)),
});

function MainDisplay(props) {
  return (
    <main>
      <Catalog button1Action={props.button1Action} button2Action={props.button2Action} />
    </main>
  );
}

export default connect(null, mapDispatchToProps)(MainDisplay);
