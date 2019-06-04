import React, { Component } from 'react'

import { Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  Drawer,
  Menu,
  MenuDivider,
  MenuItem,
  InputGroup
} from "@blueprintjs/core"
import ReactPlayer from 'react-player'

import './App.less'
import urlList from '../utils/data'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      menu:false,
      playUrl:'http://223.110.245.170/PLTV/3/224/3221226316/index.m3u8',
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
            <InputGroup
              leftIcon="filter"
              className='left-menu-filter'
            />
            <Menu className='left-menu-con'>
            {this.renderList()}
            </Menu>
          </Drawer>
        </div>
      </div>
    )
  }

  renderList () {
    return urlList.map((item) => {
      return (
        <div key={item.title}>
          <MenuDivider />
          <MenuItem icon="film" text={item.title} onClick={()=>{this.handlePlay(item.url)}} />
        </div>
      )
    })
  }

  handleOpen = () => this.setState({ menu: true })
  handleClose = () => this.setState({ menu: false })
  handlePlay = (url) => this.setState({ menu: false, playUrl: url })
}

export default App
