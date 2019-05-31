import React, { Component } from 'react'

import { Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Card,
  Menu,
  MenuDivider,
  MenuItem
} from "@blueprintjs/core"
import ReactPlayer from 'react-player'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      playUrl:'http://dlhls.cdn.zhanqi.tv/zqlive/69410_SgVxl.m3u8',
    }
  }

  render() {
    return (
      <div className="bp3-dark">
        <Navbar>
          <NavbarGroup align={Alignment.CENTER} style={{'justify-content':'center'}}>
            <NavbarHeading >Live TV</NavbarHeading>
          </NavbarGroup>
        </Navbar>

        <Card
          elevation={2}
          style={{'padding':'0', 'margin':'10px'}}
        >
          <ReactPlayer
            url={this.state.playUrl}
            controls
            width='100%'
            height='100%'
            style={{'width':'100%'}}

          />
        </Card>

        <Card elevation={2} style={{'padding':'0', 'margin':'30px 10px '}}>
          <Menu>
            <MenuItem icon="film" text="New text box" onClick={()=>{console.log(1)}}/>
            <MenuDivider />
            <MenuItem icon="film" text="New object" onClick={()=>{console.log(2)}} />
            <MenuDivider />
            <MenuItem icon="film" text="New text box" onClick={()=>{console.log(3)}} />
            <MenuDivider />
            <MenuItem icon="film" text="New object" onClick={()=>{console.log(4)}} />
          </Menu>
        </Card>

      </div>
    )
  }
}

export default App
