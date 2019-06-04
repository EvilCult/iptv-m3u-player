import React, { Component } from 'react'

import { Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  Drawer,
  Menu,
  MenuDivider,
  MenuItem
} from "@blueprintjs/core"
import ReactPlayer from 'react-player'

import './App.less'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menu:false,
      playUrl:'',
    }
  }

  render() {
    return (
      <div className='bp3-dark'>
        <Navbar className='nav'>
          <NavbarGroup align={Alignment.CENTER} className='nav-title'>
            <NavbarHeading >Live TV</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button icon='menu' minimal onClick={()=>{this.handleOpen()}}/>
          </NavbarGroup>
        </Navbar>

        <div className='main'>
          <ReactPlayer
            url={this.state.playUrl}
            controls
            width='100%'
            height='100%'
            style={{'width':'100%'}}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous"
                }
              }
            }}
          />
          <Drawer
            className='left-menu bp3-dark'
            isOpen={this.state.menu}
            onClose={()=>{this.handleClose()}}
          >
              <Menu className='left-menu-con'>
                <MenuItem icon="film" text="New text box" onClick={()=>{this.handlePlay()}}/>
                <MenuDivider />
                <MenuItem icon="film" text="New object" onClick={()=>{this.handlePlay()}} />
                <MenuDivider />
                <MenuItem icon="film" text="New text box" onClick={()=>{this.handlePlay()}} />
                <MenuDivider />
                <MenuItem icon="film" text="New object" onClick={()=>{this.handlePlay()}} />
              </Menu>
          </Drawer>
        </div>
      </div>
    )
  }

  handleOpen = () => this.setState({ menu: true })
  handleClose = () => this.setState({ menu: false })
  handlePlay = () => this.setState({ menu: false, playUrl: '' })
}

export default App
