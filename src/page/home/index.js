import React, { PureComponent } from 'react'
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
  BackTop
} from './style'

class Home extends PureComponent {
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
        {
          this.props.showScroll && <BackTop
            onClick={
              this.handleGoTop
            }
          >回到顶部</BackTop>
        }
      </HomeWrapper>
    )
  }
  componentDidMount = () => {
    this.props.changeHomeData()
    this.handleScrollY()
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }

  handleGoTop = () => {
    let nowScrollY = window.scrollY
    let timeScrolly = setInterval(() => {
      nowScrollY = nowScrollY / 1.2
      window.scrollTo(0, nowScrollY)
      if (nowScrollY <= 10) {
        window.scrollTo(0, 0)
        clearInterval(timeScrolly)
      }
    }, 20)
  }

  handleScrollY = () => {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }

}

const mapStateToprops = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo()
      dispatch(action)
    },
    changeScrollShow() {
      let scroll = document.documentElement.scrollTop
      dispatch(actionCreators.getScrollTop(scroll > 200))
    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(Home)