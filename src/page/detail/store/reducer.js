import { fromJS } from 'immutable'
import * as actionType from './actionType'

const stateDefault = fromJS({
  title: '',
  content: ''
})

const changeDetaill = (state, action) => {
  return state.merge({
    title: action.data.get('title'),
    content: action.data.get('content')
  })
}

export default (state = stateDefault, action) => {
  switch (action.type) {
    case actionType.CHANGE_DETAILL:
      return changeDetaill(state, action)
    default:
      return state
  }
}