import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
//import config file from its file path
import config from '../Firebase';

//initialize firebase
firebase.initializeApp(config);

class AddProduct extends Component {
  constructor(){
    super();

    this.state = {
      imageName: '',
      imageURL: ''
    }

    // this.uploadStart.bind(this);
    this.uploadSuccess = this.uploadSuccess.bind(this);
  }

  // uploadStart(){

  // }

  uploadSuccess(imageName){
    console.log('Image name: ', imageName);
    // this.setState({
    //   imageName: imageName
    // }, () => console.log(this.state.imageName));

    // console.log('god damnit: ', this.state.imageName)
    firebase
      .storage()
      .ref('products')
      .child(imageName)
      .getDownloadURL()
      .then(imageURL => {
        this.setState({
          imageURL,
          imageName
        }, () => console.log('url and name: ', this.state.imageURL, this.state.imageName))
      })
      .catch(err => console.log('error: ', err))
  }

  // <input type="file" onChange={e => this.selectFile(e)}></input>
  // <button type="submit" onSubmit={e => this.uploadFile(e)}>Upload Image</button>

  render(){
    return (
      <div>
        <h1>Add Product To Store: </h1>
        <FileUploader
          accept="image/*"
          name="image"
          storageRef={firebase.storage().ref('products')}
          // onUploadStart={this.uploadStart}
          onUploadSuccess={this.uploadSuccess}
        />
      </div>
    );
  };
}

export default connect()(AddProduct);

