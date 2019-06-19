import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class AddProduct extends Component {
  constructor(){
    super();

    this.state = {
      selectedImg: ''
    }

    this.selectFile.bind(this);
    this.uploadFile.bind(this);
  }

  /*
    onChange event handler - updates state with filename
  */
  selectFile(e){
    this.setState({
      selectedImg: e.target.value
    })
  }

  /*
    onSubmit event handler - uploads file to Firebase image storage
  */
  uploadFile(){
    //Send this.state.selectImg to Firebase store

    const formData = new FormData();
    formData.append('image', this.state.selectedImg, this.state.selectedImg.name);
    //Use fetch api to make a POST request
  }

  render(){
    return (
      <div>
        <h1>Add Product To Store: </h1>
        <input type="file" onChange={e => this.selectFile(e)}></input>
        <button type="submit" onSubmit={e => this.uploadFile(e)}>Upload Image</button>
      </div>
    );
  };
}

export default connect()(AddProduct);

