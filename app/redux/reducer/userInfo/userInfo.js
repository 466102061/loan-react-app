import * as actionTypes from '../../config/actionTypes'

const initialState = {}

export default function userInfo(state = initialState, action){
	switch (action.type){
		case actionTypes.USERINFO_UPDATA:
			return action.data
		default:
			return state
	}
}