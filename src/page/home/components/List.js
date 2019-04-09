import React from 'react'
import { connect } from 'react-redux'
import {
  ListWrapper,
  ListItem,
  ItemFoot,
  LoadMore
} from '../style'

const List = (props) => {
  const { homeList } = props
  return (
    <ListWrapper>
      {
        homeList.map((item) =>
          <ListItem key={item.get('id')}>
            {
              item.get('imgUrl') && <img src={item.get('imgUrl')} alt={item.get('title')}/>
            }
            <h1>{item.get('title')}</h1>
            <p>
              {item.get('content')}
            </p>
            <ItemFoot>
              {
                item.get('grade') && (
                  <span className='grade'>
                    <i className="iconfont">&#xe6ad;</i>
                    {item.get('grade')}
                  </span>
                )
              }
              <a href='www.baidu.com' >{item.get('name')}</a>
              <a href='www.baidu.com' className='leave'>
                <i className="iconfont">&#xe667;</i>
                {item.get('leave')}
              </a>
              <span className='star'>
                <i className="iconfont">&#xe755;</i>
                {item.get('star')}
              </span>
            </ItemFoot>
          </ListItem>
        )
      }
      <LoadMore>阅读更多</LoadMore>
    </ListWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    homeList: state.getIn(['home', 'homeList'])
  }
}

export default connect(mapStateToProps, null)(List)