import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

import {
  HomeWrapper,
  Homeleft,
  HomeRight,
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Homeleft>
          <img
            className='banner-img'
            alt='图片'
            src='//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </Homeleft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo()
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)