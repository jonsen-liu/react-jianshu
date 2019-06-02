import axios from 'axios'
import { fromJS } from 'immutable'
import  * as actiontype from './actiontype.js'

const loginInfo = () => {
  return {
    type: actiontype.LOGIN_STATUS_INFO,
    login: true
  }
}

export const login = (account,password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
      let data = res.data
      if(data.code === 200) {
        dispatch(loginInfo(data.data))
      }
    })
  }
}