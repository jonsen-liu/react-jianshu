import { fromJS } from 'immutable'
import { HOME_SET_INFI } from './actiontype'

const defaultState = fromJS({
  topicList: [],
  homeList: [],
  homeWriterList: []
})

export default (state = defaultState, action) => {

  switch (action.type) {
    case HOME_SET_INFI:
      return state.merge({
        topicList: fromJS(action.topicList),
        homeList: fromJS(action.homeList),
        homeWriterList: fromJS(action.homeWriterList),
      })

    default:
      return state
  }



}