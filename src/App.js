import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from './fusTheme'
injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  handleClose = () => this.setState({ open: false })
  handleToggle = () => this.setState({ open: !this.state.open })
  SideBarItem = ({ link, text, isExact }) => {
    return (
      <NavLink exact={isExact} to={link} activeClassName="active">
        <MenuItem onTouchTap={this.handleClose} primaryText={text} />
      </NavLink>
    )
  }
  render() {
    const SideBarItem = this.SideBarItem
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <SideBarItem link="/" text="Home" isExact />
              <SideBarItem link="/logos" text="Logos" />
              <SideBarItem link="/posters" text="Posters" />
              <SideBarItem link="/letterhead" text="Letterhead" />
              <SideBarItem link="/share-a-story" text="Share a story" />
              <SideBarItem
                link="/service-request-form"
                text="Service Request Form"
              />
              <SideBarItem link="/tutorial" text="Tutorial" />
            </Drawer>
            <Route exact path="/" render={() => <h1>Home View</h1>} />
            <Route path="/logos" render={() => <h1>Logos View</h1>} />
            <Route path="/posters" render={() => <h1>Posters View</h1>} />
            <Route path="/letterhead" render={() => <h1>Letterhead View</h1>} />
            <Route
              path="/share-a-story"
              render={() => <h1>Share a Story View</h1>}
            />
            <Route
              path="/service-request-form"
              render={() => <h1>Service Request Form View</h1>}
            />
            <Route path="/tutorial" render={() => <h1>Tutorial View</h1>} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
