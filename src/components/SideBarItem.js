import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'

const SideBarItem = props => (
  <NavLink exact={props.isExact} to={props.link} activeClassName="active">
    <ListItem
      onTouchTap={props.onClick}
      primaryText={props.text}
      hoverColor="#eee"
    />
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
  onClick: PropTypes.func.isRequired,
  isExact: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired
}
export default SideBarItem
