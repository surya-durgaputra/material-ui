import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardMedia, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const LetterheadCard = ({ title, label, imgUrl }) => (
  <div className="col s12 m6" style={{ paddingBottom: '0.75rem' }}>
    <Card>
      <CardMedia>
        <img src={imgUrl} alt="" />
      </CardMedia>
      <CardTitle title={title} />
      <CardActions>
        <FlatButton label={label} />
      </CardActions>
    </Card>
  </div>
)
LetterheadCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
export default LetterheadCard
