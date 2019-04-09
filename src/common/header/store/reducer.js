import * as actionType from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1,
})

export default (state = defaultState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case actionType.HANDLE_FOCUS_INPUT:
      return state.set('focused', !state.get('focused'))
      
    case actionType.HEADER_LIST:
      return state.merge({
        list: action.data,
        totalPage: Math.ceil(action.data.size / 10)
      })
      
    case actionType.HANDL_MOUSE_ENTER:
      return state.set('mouseIn', true)
      
    case actionType.HANDL_MOUSE_LEAVE:
      return state.set('mouseIn', false)
      
    case actionType.HANDL_CHANGE_PAGE:
      return state.set('page', action.page)

    default:
    return state
  }
}