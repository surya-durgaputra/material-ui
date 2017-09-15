import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { AppBar } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import fusTheme from './fusTheme'
import SideNav from './SideNav'
import Home from './views/Home'
import Letterhead from './views/Letterhead'
import Logos from './views/Logos'
import NotFound from './views/NotFound'
import Posters from './views/Posters'
import ServiceRequest from './views/ServiceRequest'
import Story from './views/Story'
import Tutorial from './views/Tutorial'

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={() => {
                this.sideNav.handleToggle()
              }}
            />
            <SideNav
              open={false}
              isDocked={false}
              ref={instance => {
                this.sideNav = instance
              }}
            />
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
