import React, { Component } from 'react';
import axios from 'axios';


class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles : null 
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    this.filesUploader = this.filesUploader.bind(this);
  }
  
  fileSelectedHandler(event) {
    this.setState({ selectedFiles: event.target.files[0]})
  }
  
  filesUploader() {
    const fd = new FormData();
    fd.append('image', this.state.selectedFiles, this.state.selectedFiles.name);
    fd.append('SKU', '1');
    axios.post('/businessapi/uploadImage', fd)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        if (!res.success) throw new Error(res.err);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.filesUploader}></button>
      </div>
    );
  }
}

export default Upload;