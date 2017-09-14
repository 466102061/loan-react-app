import { get } from '../get'

export function getMyTabs(){
	const result = get('api/my/tabs')
	return result
}