import { get } from '../get'

export function getQaqList(){
	const result = get('api/qaq')
	return result
}