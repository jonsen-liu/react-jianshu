import axios from 'axios'
import { HOME_SET_INFI } from './actiontype.js'

const setHomeInfo = (res) => {
  return {
    type : HOME_SET_INFI,
    homeList: res.homeList,
    homeWriterList: res.homeWriterList,
    topicList: res.topicList
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