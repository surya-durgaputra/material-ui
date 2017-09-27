import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/fileUpload.css'
// import MaterializeRaisedButton from './MaterializeRaisedButton'

// const styles = {
//   button: {
//     marginTop: 12
//   },
//   exampleImageInput: {
//     cursor: 'pointer',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     width: '100%',
//     opacity: 0
//   }
// }

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileInput: null
    }
  }
  handleFilePath = event => {
    let files = Array.from(event.target.files)

    if (files.length === 0) {
      this.setState({
        fileInput: null
      })
    } else {
      this.setState({
        fileInput: files.map(file => file.name).join(', ')
      })
    }
  }
  render() {
    let uploadLabel = this.props.uploadLabel || 'Upload File'
    let fileValue = this.state.fileInput || 'Select a file to upload'
    // console.log(`uploadLabel:${uploadLabel} fileValue:${fileValue}`)
    return (
      <div className="row">
        <div className="file-field input-field">
          <div className="btn">
            <span>{uploadLabel}</span>
            <input
              id="upload"
              type="file"
              onChange={this.handleFilePath}
              multiple
            />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              value={fileValue}
              readOnly
            />
          </div>
          {/* <div className="col s12 m2">
            <MaterializeRaisedButton
              label={uploadLabel}
              labelPosition="before"
              style={styles.button}
              containerElement="label"
              primary={true}
            >
              <input
                id="upload"
                type="file"
                style={styles.exampleImageInput}
                onChange={this.handleFilePath}
                multiple
              />
            </MaterializeRaisedButton>
          </div>
          <div className="col s12 m10">
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                value={fileValue}
                readOnly
              />
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
FileUpload.propTypes = {
  uploadLabel: PropTypes.string
}
export default FileUpload
