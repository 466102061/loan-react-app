import * as actionTypes from '../../config/actionTypes'

export function addItem(item){
	return {
		type : actionTypes.HANDLE_ADD,
		data : item
	}
}

export function removeItem(item){
	return {
		type : actionTypes.HANDLE_REMOVE,
		data : item
	}
}