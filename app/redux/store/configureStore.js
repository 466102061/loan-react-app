import { createStore } from 'redux'
import rootReducer from '../reducer'

export default function configureStore(initialState){
	const store = createStore(rootReducer, initialState,
		//触发redux-devtolls,可在已安装该插件的chrom下调试
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}