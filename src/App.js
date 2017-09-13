import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {AppBar, Drawer,MenuItem, FontIcon} from 'material-ui'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

injectTapEventPlugin()

class App extends Component {

  constructor(props){
    super(props)
    this.state = {open:false}
  }
  handleToggle = () => this.setState({open:!this.state.open})
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}>
            <Drawer 
              open={this.state.open}
              docked={false}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
          </AppBar>
          <p>Hello world</p>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
