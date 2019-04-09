import React from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterTitle,
  WriterSpan,
  WriterContent,
  WriterLookAll
} from '../style'

const Writer = (props) => {

  const { homeWriterList } = props
  return (
    <WriterWrapper>
      <WriterTitle>
        <span>推荐作者</span>
        <WriterSpan>
          <i className="iconfont" >&#xe851;</i>
          换一批
          </WriterSpan>
      </WriterTitle>
      {
        homeWriterList.map((item) => {
          return (
            <WriterContent key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" />
              <div>
                <h5>{item.get('name')}</h5>
                <p>写了{item.get('wordage')}字 · {item.get('likes')}喜欢</p>
              </div>
              <div className='subscription'>+关注</div>
            </WriterContent>
          )
        })
      }
      <WriterLookAll>
        查看全部
      </WriterLookAll>
    </WriterWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    homeWriterList: state.getIn(['home', 'homeWriterList'])
  }
}

export default connect(mapStateToProps, null)(Writer)