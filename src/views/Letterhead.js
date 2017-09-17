import React, { Component } from 'react'
import { Card, CardTitle, CardMedia, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Letterhead extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
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
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/600/776/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/600/776/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/600/776/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
          <div className="col s12 m6">
            <Card>
              <CardMedia>
                <img src="https://unsplash.it/600/776/?random" alt="" />
              </CardMedia>
              <CardTitle title="Card title" />
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Letterhead
