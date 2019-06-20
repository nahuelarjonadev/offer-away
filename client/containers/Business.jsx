import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import Catalog from './Catalog';

const mapStateToProps = (store) => ({
  buttonOneText: store.products.buttonOneText,
  buttonTwoText: store.products.buttonTwoText,
});

const mapDispatchToProps = (dispatch) => ({
  setButtonText: () => dispatch(actions.setButtonText()),
});

class Business extends Component {
  componentDidMount() {
    this.props.setButtonText();
  }

  render() {
    return (
      <div>
        <Catalog buttonOneText={this.props.buttonOneText} buttonTwoText={this.props.buttonTwoText} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Business);
