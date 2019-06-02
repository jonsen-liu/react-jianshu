import { fromJS } from 'immutable'
import * as actiontype from './actiontype'

const defaultState = fromJS({
  login: false
})


export default (state = defaultState, action) => {

  switch (action.type) {
    case actiontype.LOGIN_STATUS_INFO: 
      return state.set('login', true)
    default:
      return state
  }

}