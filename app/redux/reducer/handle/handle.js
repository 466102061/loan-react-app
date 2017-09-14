import * as actionTypes from '../../config/actionTypes'
const initialState = []

export default function handleFunc(state = initialState, action){
	switch(action.type){
		case actionTypes.HANDLE_ADD:
			return state.unshift(action.data)
		case actionTypes.HANDLE_REMOVE:
			return state.filter(item => {
				if(item.id !== action.data.id){
					return item
				}
			})
		default:
			return state
	}
}