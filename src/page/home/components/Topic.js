import React from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'

const Topic = (props) => {
  const { topicList } = props
  return (
    <TopicWrapper>
      {
        topicList.map((item)=>{
          return (
            <TopicItem  className='topic' key={item.get('id')}>
              <img src={item.get('img')} alt={item.get('title')}/>
              <span>{item.get('title')}</span>
            </TopicItem>
          )
        })
      }
      <TopicItem>
        <a href='www.baidu.com'>更多热门专题></a>
      </TopicItem>
    </TopicWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home','topicList'])
  }
}

export default connect(mapStateToProps,null)(Topic)