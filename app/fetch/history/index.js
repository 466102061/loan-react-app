import { get } from '../get.js'

export function getHistoryData(){
	const result = get('/api/history')
	return result
}