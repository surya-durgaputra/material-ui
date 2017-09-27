import React, { Component } from 'react'
import { Checkbox, TextField, DatePicker } from 'material-ui'
import { Link } from 'react-router-dom'
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
  constructor(props) {
    super(props)
    this.state = {}
    this.singleLineFields = ['Name', 'Email', 'Phone', 'Department']
    this.multiLineFields = [
      'Project Description',
      'Project Goal',
      'Project Budget',
      'Key Messages',
      'Primary Target Audience',
      'Secondary Target Audience',
      'Project Contact(if other than yourself)',
      'Comments'
    ]
    this.checkboxes = [
      'Simple 1',
      'Simple 2',
      'Simple 3',
      'Simple 4',
      'Simple 5',
      'Simple 6',
      'Simple 7',
      'Simple 8',
      'Simple 9',
      'Simple 10',
      'Simple 11',
      'Simple 12',
      'Simple 13',
      'Simple 14',
      'Simple 15',
      'Simple 16'
    ]
  }

  formatLabelToPropertyName = label =>
    label
      .toLowerCase()
      .split(' ')
      .join('-')
  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  componentWillMount() {
    const fieldProps = [
      ...this.singleLineFields,
      ...this.multiLineFields
    ].reduce(
      (acc, field) => ({
        [this.formatLabelToPropertyName(field)]: '',
        ...acc
      }),
      {}
    )
    const checkboxProps = this.checkboxes.reduce(
      (acc, field) => ({
        [this.formatLabelToPropertyName(field)]: false,
        ...acc
      }),
      {}
    )
    // const singleLineProps = this.singleLineFields.reduce(
    //   (acc, field) => ({
    //     [this.formatLabelToPropertyName(field)]: '',
    //     ...acc
    //   }),
    //   {}
    // )
    // const multiLineProps = this.multiLineFields.reduce(
    //   (acc, field) => ({
    //     [this.formatLabelToPropertyName(field)]: '',
    //     ...acc
    //   }),
    //   {}
    // )
    //this.setState({ ...this.state, ...singleLineProps, ...multiLineProps })
    this.setState({ ...this.state, ...fieldProps, ...checkboxProps })
  }
  render() {
    const SingleLineElement = (label, idx) => {
      let formattedLabel = this.formatLabelToPropertyName(label)
      return (
        <div key={idx} className="col s12 m6 flow-text">
          <TextField
            floatingLabelText={label}
            name={formattedLabel}
            value={this.state[formattedLabel]}
            fullWidth={true}
            onChange={this.handleInputChange}
          />
          <br />
        </div>
      )
    }

    const MultiLineElement = (label, idx) => {
      let formattedLabel = this.formatLabelToPropertyName(label)
      return (
        <div key={idx} className="col s12 m6 flow-text">
          <TextField
            floatingLabelText={label}
            name={formattedLabel}
            value={this.state[formattedLabel]}
            fullWidth={true}
            onChange={this.handleInputChange}
            rows={2}
            multiLine={true}
          />
          <br />
        </div>
      )
    }
    const CheckboxElement = (label, idx) => {
      let formattedLabel = this.formatLabelToPropertyName(label)
      return (
        <div key={idx} className="col s12 m6">
          <Checkbox
            label={label}
            style={styles.checkbox}
            name={formattedLabel}
            onClick={this.handleInputChange}
            checked={this.state[formattedLabel]}
          />
        </div>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <h2>Please use this form to request services</h2>
          </div>
        </div>
        <div className="row">
          {this.singleLineFields.map((field, i) => SingleLineElement(field, i))}
        </div>
        <div className="row">
          {this.multiLineFields.map((field, i) => MultiLineElement(field, i))}
        </div>

        <div className="row">
          <div className="col s12 m6">
            <DatePicker hintText="Desired Completion Date" />
          </div>
          <div className="col s12 m6 file-upload">
            {/* <MaterializeRaisedButton
      label="Upload File"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      primary={true}
    >
      <input type="file" style={styles.exampleImageInput} />
    </MaterializeRaisedButton> */}
            <FileUpload uploadLabel="Upload Files" />
          </div>
        </div>
        <div className="row">
          {this.checkboxes.map((boxName, i) => CheckboxElement(boxName, i))}
        </div>
        <div className="row">
          <div className="col s12 planning-guide-checkbox">
            <MaterializeRaisedButton label="Submit" primary={true} />
            <Checkbox
              label={
                <span>
                  I have read the{' '}
                  <Link
                    to="/planning-guide"
                    style={{ fontWeight: 500 }}
                    target="_blank"
                  >
                    Planning Guide
                  </Link>
                </span>
              }
              style={styles.checkbox}
              inputStyle={{ width: '35px' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceRequest
