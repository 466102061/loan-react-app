import { combineReducers } from 'redux'
import userInfo from './userInfo/userInfo'
import handle from './handle/handle'

export default combineReducers({
	userInfo,
	handle
})