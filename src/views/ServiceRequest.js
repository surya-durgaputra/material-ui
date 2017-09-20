import React, { Component } from 'react'
import { Checkbox, TextField, DatePicker } from 'material-ui'
import MaterializeRaisedButton from '../components/MaterializeRaisedButton'
import FileUpload from '../components/FileUpload'
import '../styles/responsive-text.css'

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  },
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
}

class ServiceRequest extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <h2>Please use this form to request services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 flow-text">
            <TextField
              floatingLabelText="Floating Label Text"
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6 flow-text">
            <TextField
              floatingLabelText="Floating Label Text"
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6 flow-text">
            <TextField
              floatingLabelText="Floating Label Text"
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6 flow-text">
            <TextField
              floatingLabelText="Floating Label Text"
              fullWidth={true}
            />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Multiline and Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6">
            <DatePicker hintText="Portrait Dialog" />
          </div>
          <div className="col s12 m6">
            {/* <MaterializeRaisedButton
      label="Upload File"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      primary={true}
    >
      <input type="file" style={styles.exampleImageInput} />
    </MaterializeRaisedButton> */}
            <FileUpload uploadLabel="Upload" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
          <div className="col s12 m6">
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <MaterializeRaisedButton label="Submit" primary={true} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceRequest
