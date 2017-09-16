/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'

import SideBarItem from './SideBarItem'

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/letterhead', text: 'Letterhead' },
  { isExact: false, linkTo: '/logos', text: 'Logos' },
  { isExact: false, linkTo: '/posters', text: 'Posters' },
  {
    isExact: false,
    linkTo: '/service-request-form',
    text: 'Service Request Form'
  },
  { isExact: false, linkTo: '/share-a-story', text: 'Share a Story' },
  { isExact: false, linkTo: '/tutorial', text: 'Tutorial' }
]
var styles = {}
class TemporaryDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: {
        top: false,
        left: props.open,
        bottom: false,
        right: false
      }
    }
  }

  // const styles = {
  //     list: {
  //       width: 250,
  //       flex: 'initial',
  //     },
  //     listFull: {
  //       width: 'auto',
  //       flex: 'initial',
  //     },
  //   };
  toggleDrawer = (side, open) => {
    const drawerState = {}
    drawerState[side] = open
    this.setState({ open: drawerState })
  }
  handleLeftOpen = () => {
    this.toggleDrawer('left', true)
  }

  handleLeftClose = () => {
    this.toggleDrawer('left', false)
  }

  render() {
    styles = {
      list: {
        width: 250,
        flex: 'initial'
      },
      listFull: {
        width: 'auto',
        flex: 'initial'
      }
    }
    const classes = this.props.classes

    return (
      <Drawer
        open={this.state.open.left}
        onRequestClose={this.handleLeftClose}
        onClick={this.handleLeftClose}
      >
        {links.map((link, i) => (
          <SideBarItem
            link={link.linkTo}
            text={link.text}
            isExact={link.isExact}
            handleClose={this.handleLeftClose}
            key={i}
          />
        ))}
      </Drawer>
    )
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TemporaryDrawer)
