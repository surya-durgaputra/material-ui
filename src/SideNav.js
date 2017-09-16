import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'material-ui'
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

class SideNav extends Component {
  constructor(props) {
    super(props)
    this.state = { open: props.open }
  }
  handleClose = () => this.setState({ open: false })
  handleToggle = () => this.setState({ open: !this.state.open })
  render() {
    return (
      <Drawer
        open={this.state.open}
        docked={this.props.isDocked}
        onRequestChange={open => this.setState({ open })}
      >
        {links.map((link, i) => (
          <SideBarItem
            link={link.linkTo}
            text={link.text}
            isExact={link.isExact}
            handleClose={this.handleClose}
            key={i}
          />
        ))}
      </Drawer>
    )
  }
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  isDocked: PropTypes.bool.isRequired
}

export default SideNav
