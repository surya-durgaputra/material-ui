import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MaterializeRaisedButton from '../components/MaterializeRaisedButton'
import '../styles/responsive-text.css'

class Story extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <p>
              As absolute is by amounted repeated entirely ye returned. These
              ready timed enjoy might sir yet one since. Years drift never if
              could forty being no. On estimable dependent as suffering on my.
              Rank it long have sure in room what as he. Possession travelling
              sufficient yet our. Talked vanity looked in to. Gay perceive led
              believed endeavor. Rapturous no of estimable oh therefore
              direction up. Sons the ever not fine like eyes all sure.
            </p>
            <p>
              Do in laughter securing smallest sensible no mr hastened. As
              perhaps proceed in in brandon of limited unknown greatly.
              Distrusts fulfilled happiness unwilling as explained of difficult.
              No landlord of peculiar ladyship attended if contempt ecstatic.
              Loud wish made on is am as hard. Court so avoid in plate hence. Of
              received mr breeding concerns peculiar securing landlord. Spot to
              many it four bred soon well to. Or am promotion in no departure
              abilities. Whatever landlord yourself at by pleasure of children
              be.
            </p>
            <p>
              Loud wish made on is am as hard. Court so avoid in plate hence. Of
              received mr breeding concerns peculiar securing landlord. Spot to
              many it four bred soon well to. Or am promotion in no departure
              abilities. Whatever landlord yourself at by pleasure of children
              be.As absolute is by amounted repeated entirely ye returned. These
              ready timed enjoy might sir yet one since. Years drift never if
              could forty being no. On estimable dependent as suffering on my.
            </p>
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
        </div>
        <div className="row">
          <div className="col s12">
            <TextField
              floatingLabelText="Floating Label Text"
              multiLine={true}
              rows={2}
              fullWidth={true}
            />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col s2">
            <MaterializeRaisedButton label="Submit" primary={true} />
          </div>
        </div>
      </div>
    )
  }
}

export default Story
