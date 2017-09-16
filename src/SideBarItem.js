import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MenuItem } from 'material-ui'

const SideBarItem = props => (
  <NavLink exact={props.isExact} to={props.link} activeClassName="active">
    <MenuItem onTouchTap={props.handleClose} primaryText={props.text} />
  </NavLink>
)

// class SideBarItem extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//   <NavLink
//     exact={this.props.isExact}
//     to={this.props.link}
//     activeClassName="active"
//   >
//     <MenuItem
//       onTouchTap={this.props.handleClose}
//       primaryText={this.props.text}
//     />
//   </NavLink>
//     )
//   }
// }
SideBarItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  isExact: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired
}
export default SideBarItem
