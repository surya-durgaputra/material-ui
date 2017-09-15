import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItem } from 'material-ui'

class SideBarItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <NavLink
        exact={this.props.isExact}
        to={this.props.link}
        activeClassName="active"
      >
        <MenuItem
          onTouchTap={this.props.handleClose}
          primaryText={this.props.text}
        />
      </NavLink>
    )
  }
}

export default SideBarItem
