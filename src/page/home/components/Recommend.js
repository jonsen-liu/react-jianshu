import React from 'react'
import {
  RecommendWrapper,
  RecommendItem
} from '../style.js'

import jianshuhuiyuan from '../../../statics/imgs/jianshuhuiyuan.png'
import youxuanlianzai from '../../../statics/imgs/youxuanlianzai.png'
import jianshubanquan from '../../../statics/imgs/jianshubanquan.png'
import jianshudaketang from '../../../statics/imgs/jianshudaketang.png'

const Recommend = () => {
  return(
    <RecommendWrapper>
      <RecommendItem href='www.baidu.com' imgUrl={jianshuhuiyuan}></RecommendItem>
      <RecommendItem href='www.baidu.com' imgUrl={youxuanlianzai}></RecommendItem>
      <RecommendItem href='www.baidu.com' imgUrl={jianshubanquan}></RecommendItem>
      <RecommendItem href='www.baidu.com' imgUrl={jianshudaketang}></RecommendItem>
    </RecommendWrapper>
  )
}

export default Recommend