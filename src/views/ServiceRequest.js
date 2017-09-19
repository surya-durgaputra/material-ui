import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import MaterializeRaisedButton from '../components/MaterializeRaisedButton'
import '../styles/responsive-text.css'

const styles = {
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
            <DatePicker hintText="File upload placeholder" />
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
