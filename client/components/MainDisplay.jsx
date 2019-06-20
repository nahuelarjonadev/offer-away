import React, { Component }from 'react';
import Catalog from '../containers/Catalog';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  buttonOneText: store.products.buttonOneText,
  buttonTwoText: store.products.buttonTwoText,
});

const mapDispatchToProps = (dispatch) => ({
  button1Action: (productId) => dispatch(actions.addToCart(productId)),
  button2Action: (productId) => dispatch(actions.subtractFromCart(productId)),
  resetButtonText: () => dispatch(actions.resetButtonText()),
});

class MainDisplay extends Component {
  componentDidMount() {
    this.props.resetButtonText();
  }

  render() {
    return (
      <main>
        <Catalog button1Action={this.props.button1Action} button2Action={this.props.button2Action}
        buttonOneText={this.props.buttonOneText} buttonTwoText={this.props.buttonTwoText} />
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
