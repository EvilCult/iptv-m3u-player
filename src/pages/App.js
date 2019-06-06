import React, { Component } from 'react'
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  Drawer,
  Menu,
  MenuDivider,
  MenuItem,
  InputGroup,
  Tab,
  Tabs,
} from "@blueprintjs/core"
import ReactPlayer from 'react-player'

import './App.less'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      menu:false,
      menuType: 'cctv',
      playUrl: null,
      playing: false,
      dataLit: {},
      filterKey: ''
    }
  }

  componentDidMount () {
    const api = 'https://raw.githubusercontent.com/EvilCult/iptv-m3u-maker/master/tv.json'
    fetch(api)
    .then(res => res.json())
    .then(resData => {
      this.setState({dataLit: resData})
    })
  }

  render() {
    console.log('render')
    return (
      <div className='bp3-dark'>
        <Navbar className='nav'>
          <NavbarGroup align={Alignment.CENTER} className='nav-title'>
            <NavbarHeading >Live TV</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}  className='nav-btn'>
            <Button icon='menu' minimal onClick={()=>{this.handleOpen()}}/>
          </NavbarGroup>
        </Navbar>

        <div className='main'>
          <ReactPlayer
            url={this.state.playUrl}
            controls
            width='100%'
            height='315px'
            playing={this.state.playing}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous"
                }
              }
            }}
          />
          {this.renderDrawer()}
        </div>
      </div>
    )
  }

  renderDrawer () {
    return (
      <Drawer
        className='left-menu bp3-dark'
        isOpen={this.state.menu}
        onClose={()=>{this.handleClose()}}
      >
        <Navbar>
          <Navbar.Group align={Alignment.CENTER}>
            <Tabs
              id="navbar"
              animate={true}
              onChange={this.handleTabChange}
              selectedTabId={this.state.menuType}
            >
              <Tab id="cctv" title="CCTV"/>
              <Tab id="local" title="地方频道"/>
              <Tab id="other" title="影视频道"/>
            </Tabs>
          </Navbar.Group>
        </Navbar>
        <Menu className='left-menu-con'>
          <InputGroup
            leftIcon="filter"
            className='left-menu-filter'
            onChange={this.handleFilter}
          />
          {this.renderList()}
        </Menu>
      </Drawer>
    )
  }

  renderList () {
    const curTab = this.state.menuType
    const defaultList = [{"title":"CCTV-1","url":"http://223.110.245.170/PLTV/3/224/3221226316/index.m3u8"},{"title":"CCTV-2","url":"http://cctvcnch5c.v.wscdns.com/live/cctv2_2/index.m3u8"},{"title":"CCTV-3","url":"http://cctvcnch5c.v.wscdns.com/live/cctv3_2/index.m3u8"},{"title":"CCTV-4","url":"http://cctvcnch5c.v.wscdns.com/live/cctv4_2/index.m3u8"},{"title":"CCTV-5","url":"http://cctvcnch5c.v.wscdns.com/live/cctv5_2/index.m3u8"},{"title":"CCTV-6","url":"http://cctvcnch5c.v.wscdns.com/live/cctv6_2/index.m3u8"},{"title":"CCTV-7","url":"http://cctvcnch5c.v.wscdns.com/live/cctv7_2/index.m3u8"},{"title":"CCTV-8","url":"http://223.110.245.170/ott.js.chinamobile.com/PLTV/3/224/3221227205/index.m3u8"},{"title":"CCTV-9","url":"http://116.199.5.51:8114/index.m3u8?Fsv_chan_hls_se_idx=33&amp;FvSeid=1&amp;Fsv_ctype=LIVES&amp;Fsv_otype=1&amp;Provider_id=&amp;Pcontent_id=.m3u8"},{"title":"CCTV-10","url":"http://223.110.245.170/ott.js.chinamobile.com/PLTV/3/224/3221225550/index.m3u8"},{"title":"CCTV-11","url":"http://cctvcnch5c.v.wscdns.com/live/cctv11_2/index.m3u8"},{"title":"CCTV-12","url":"http://223.110.245.172/PLTV/3/224/3221225556/index.m3u8"},{"title":"CCTV-13","url":"http://cctvcnch5c.v.wscdns.com/live/cctv13_2/index.m3u8"},{"title":"CCTV-14","url":"http://121.31.30.90:8085/ysten-business/live/cctv-14/yst.m3u8"},{"title":"CCTV-15","url":"http://111.40.205.87/PLTV/88888888/224/3221225721/index.m3u8"}]

    let urlList
    if (Object.keys(this.state.dataLit).length === 0) {
      urlList = defaultList
    } else {
      urlList = this.state.dataLit[curTab]
    }

    let result = []
    if (this.state.filterKey !== '') {
      urlList.forEach((item) => {
        if (item.title.toLowerCase().indexOf(this.state.filterKey.toLowerCase()) >= 0) {
          result.push(item)
        }
      })
    } else {
      result = urlList
    }

    return result.map((item) => {
      return (
        <div key={item.title}>
          <MenuDivider />
          <MenuItem icon="film" text={item.title} onClick={()=>{this.handlePlay(item.url)}} />
        </div>
      )
    })
  }

  handleOpen      = ()    => this.setState({ menu     : true, filterKey: '', playUrl  : null, playing: false })
  handleClose     = ()    => this.setState({ menu     : false })
  handlePlay      = (url) => {this.setState({ menu    : false, playUrl : url,  playing: true })}
  handleTabChange = (tab) => this.setState({ menuType : tab })
  handleFilter    = (e)   => this.setState({ filterKey: e.target.value })
}

export default App
