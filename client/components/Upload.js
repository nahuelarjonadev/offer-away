import React, { Component } from 'react';
import axios from 'axios';


class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles : null,
      SKU: 1,
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    this.filesUploader = this.filesUploader.bind(this);
    this.saveSKU = this.saveSKU.bind(this);
  }
  
  fileSelectedHandler(event) {
    this.setState({ selectedFiles: event.target.files[0]})
  }

  saveSKU(number) {
    console.log(number)
    this.setState({ SKU: number})
  }
  
  filesUploader() {
    const fd = new FormData();
    fd.append('image', this.state.selectedFiles, this.state.selectedFiles.name);
    fd.append('SKU', this.state.SKU);
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
        <div>
          <span>FILE: </span><input type="file" onChange={this.fileSelectedHandler}/>
          <br />
          <span>SKU: </span><input type="text" onChange={(event) => this.saveSKU(event.target.value)}/>
          <br />
          <button onClick={this.filesUploader}></button>
        </div>
      </div>
    );
  }
}

export default Upload;