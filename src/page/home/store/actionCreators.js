import axios from 'axios'
import { fromJS } from 'immutable'
import * as actiontype from './actiontype.js'

const setHomeInfo = (res) => {
  return {
    type : actiontype.HOME_SET_INFO,
    homeList: res.homeList,
    homeWriterList: res.homeWriterList,
    topicList: res.topicList
  }
}

const addHomeListInfo = (homeList) => {
  return {
    type : actiontype.TO_READ_MORE,
    homeList: fromJS(homeList)
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(setHomeInfo(res.data))
    }).catch((err) => {
      console.log('error', err)
    })
  }
}

export const ToReadMore = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(addHomeListInfo(res.data.homeList))
    }).catch((err) => {
      console.log('error', err)
    })
  }
}

export const getScrollTop = (show) => {
  return {
    type: actiontype.CHANGE_SCROLL_SHOW,
    show
  }
}