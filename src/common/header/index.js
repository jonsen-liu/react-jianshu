import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoTitleSpan,
  SearchItem,
  Addition,
  Button,
} from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

class Header extends Component {

  render() {
    const { focused, mouseIn, list, page, totalPage, handleInputFocus, handleInputBlur, handlMouseEnter, handlMouseLeave, handlChangePage } = this.props
    const itemList = []
    if (list.size > 0) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (list.get(i) !== undefined) {
          itemList.push(list.get(i))
        }
      }
    }
    return (
      <div style={{ borderBottom: '1px solid #f0f0f0' }}>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavWrapper className={focused ? 'focused' : ''}>
                <NavSearch
                  onFocus={()=>{handleInputFocus(list.size)}}
                  onBlur={handleInputBlur}
                />
                <i className="iconfont">&#xe62d;</i>
                {
                  (focused || mouseIn) &&
                  (
                    <SearchInfo
                      onMouseEnter={handlMouseEnter}
                      onMouseLeave={handlMouseLeave}
                    >
                      <SearchInfoTitle>
                        热门搜索
                        <SearchInfoTitleSpan onClick={() => handlChangePage(page, totalPage, this.spinIcon)}>
                          <span className="iconfont" ref={(icon) => { this.spinIcon = icon }}>&#xe851;</span>
                          换一批
                        </SearchInfoTitleSpan>
                      </SearchInfoTitle>
                      {
                        itemList.map((item, index) => {
                          return <SearchItem key={index}>{item}</SearchItem>
                        })
                      }

                    </SearchInfo>
                  )
                }
              </NavWrapper>
            </CSSTransition>
          </Nav>
          <Addition>
            <Button className='writeing'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(size) {
      size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.handleFocusInput())
    },
    handleInputBlur() {
      dispatch(actionCreators.handleFocusInput())
    },
    handlMouseEnter() {
      dispatch(actionCreators.handlMouseEnter())
    },
    handlMouseLeave() {
      dispatch(actionCreators.handlMouseLeave())
    },
    handlChangePage(page, totalPage, spinIcon) {
      if (page < totalPage - 1) {
        dispatch(actionCreators.handlChangePage(page + 1))
      } else {
        dispatch(actionCreators.handlChangePage(0))
      }
      let deg = spinIcon.style.transform === '' ? 360 : Number(spinIcon.style.transform.match(/[0-9]+/)[0]) + 360
      spinIcon.style.transform = 'rotate(' + deg + 'deg)'
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)