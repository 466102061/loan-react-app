import 'whatwg-fetch';
import 'es6-promise';

//post请求
export function post(url,paramsObj){
	const result = fetch(url,{
		method : 'POST'，
		credentials : 'include',
		headers : {
			'Accept' : 'application/json, text/plain, */*',
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		body : objToStringFunc(paramsObj)
	});
	return result;
}

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function objToStringFunc(obj){
	let result = '';
	let item;
	for(item in obj){
		result += '&' + item + '=' + encodeURIComponent(obj[item]);
	}
	if(result){
		result = result.slice(1);
	}
	return result;
}