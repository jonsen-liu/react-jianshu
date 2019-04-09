import * as actionType from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'

const headerList = (data) => {
  return {
    type: actionType.HEADER_LIST,
    data: fromJS(data)
  }
}

export const handleFocusInput = () => {
  return {
    type: actionType.HANDLE_FOCUS_INPUT
  }
}

export const handlMouseEnter = () => {
  return {
    type: actionType.HANDL_MOUSE_ENTER
  }
}

export const handlMouseLeave = () => {
  return {
    type: actionType.HANDL_MOUSE_LEAVE
  }
}

export const handlChangePage = (page) => {
  return {
    type: actionType.HANDL_CHANGE_PAGE,
    page
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res)=> {
        const data = res.data
        if(data.code === 200) {
          const action = headerList(data.data)
          dispatch(action)
        }
      })
      .catch((err)=> {
        console.log('error')
      })
  }
}