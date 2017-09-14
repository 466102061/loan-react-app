const LocalStore =  {
	getItem : function(key){
		let value
		try{
			value = localStorage.getItem(key)
		}catch(ex){
			//开发环境下提示error
			if(__DEV__){
				console.error('localStorage.getItem方法报错',ex.message)
			}
		}finally{
			return value
		}
	},
	setItem : function (key,value){
		try{
			// ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
			localStorage.setItem(key,value)
		}catch(ex){
			if(__DEV__){
				console.error('localStorage.setItem方法报错',ex.message)
			}
		}
	},
	removeItem : function(key){
		try{
			localStorage.removeItem(key)
		}catch(ex){
			if(__DEV__){
				console.error('localStorage.removeItem方法报错',ex.message)
			}
		}
	},
	clear : function(){
		try{
			localStorage.clear()
		}catch(ex){
			if(__DEV__){
				console.error('localStorage.clear方法报错',ex.message)
			}
		}
	}
}

export default LocalStore