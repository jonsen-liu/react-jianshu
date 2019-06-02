import { fromJS } from 'immutable'
import * as actiontype from './actiontype'

const defaultState = fromJS({
  topicList: [],
  homeList: [],
  homeWriterList: [],
  showScroll: false
})

const homeSetInfo = (state,action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    homeList: fromJS(action.homeList),
    homeWriterList: fromJS(action.homeWriterList),
  }) 
}


export default (state = defaultState, action) => {

  switch (action.type) {
    case actiontype.HOME_SET_INFO:
      return homeSetInfo(state, action)

    case actiontype.TO_READ_MORE:
      return state.set('homeList',state.get('homeList').concat(action.homeList))

    case actiontype.CHANGE_SCROLL_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }



}