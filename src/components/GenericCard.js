import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardTitle,
  CardMedia,
  CardHeader,
  CardActions,
  CardText
} from 'material-ui/Card'

const GenericCard = ({
  headerTitle,
  headerSubtitle,
  headerAvatar,
  overlay,
  mediaImgSrc,
  cardTitle,
  cardSubtitle,
  cardActions,
  cardText
}) => (
  <Card>
    {(headerTitle || headerSubtitle || headerAvatar) && (
      <CardHeader
        title={headerTitle}
        subtitle={headerSubtitle}
        avatar={headerAvatar}
      />
    )}
    {mediaImgSrc && (
      <CardMedia overlay={overlay}>
        <img src={mediaImgSrc} alt="" />
      </CardMedia>
    )}
    {(cardTitle || cardSubtitle) && (
      <CardTitle title={cardTitle} subtitle={cardSubtitle} />
    )}
    {cardText && <CardText>{cardText}</CardText>}
    {cardActions && <CardActions>{cardActions}</CardActions>}
  </Card>
)
GenericCard.propTypes = {
  headerTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
  headerAvatar: PropTypes.string,
  overlay: PropTypes.object,
  mediaImgSrc: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardActions: PropTypes.object,
  cardText: PropTypes.string
}
export default GenericCard
