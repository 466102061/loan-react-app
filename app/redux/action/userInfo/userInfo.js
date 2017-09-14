import * as actionTypes from '../../config/actionTypes'

export function updata(data){
	return {
		type : actionTypes.USERINFO_UPDATA,
		data
	}
}