import React, { Component } from 'react'

import { Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  Card,
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
      playUrl:'http://dlhls.cdn.zhanqi.tv/zqlive/69410_SgVxl.m3u8',
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
            <Button icon='menu'/>
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
        </div>
      </div>
    )
  }
}

export default App
