import { get } from '../get';

export function getLoanList(){
	const result = get('api/list');
	return result;
}