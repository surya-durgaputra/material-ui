import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import { AppBar, Drawer, MenuItem } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import fusTheme from './fusTheme'
import SideBarItem from './SideBarItem'
import Home from './views/Home'
import Letterhead from './views/Letterhead'
import Logos from './views/Logos'
import NotFound from './views/NotFound'
import Posters from './views/Posters'
import ServiceRequest from './views/ServiceRequest'
import Story from './views/Story'
import Tutorial from './views/Tutorial'

injectTapEventPlugin()

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  handleClose = () => this.setState({ open: false })
  handleToggle = () => this.setState({ open: !this.state.open })
  render() {
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/logos" component={Logos} />
              <Route path="/posters" component={Posters} />
              <Route path="/letterhead" component={Letterhead} />
              <Route path="/share-a-story" component={Story} />
              <Route path="/service-request-form" component={ServiceRequest} />
              <Route path="/tutorial" component={Tutorial} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
