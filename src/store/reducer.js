import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store'
import { homeReducer } from '../page/home/store'
import { detailReducer } from '../page/detail/store'
import { loginReducer } from '../page/login/store'

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer