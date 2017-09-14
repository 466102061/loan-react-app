import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory,bowserHistory } from 'react-router'
import ConfigureStore from './redux/store/configureStore'
import RouteMap from './router/routeMap'

import './static/css/common.css'

//创建redux 的 store 对象
const store = ConfigureStore()

//const app = document.createElement('div')
//document.body.appendChild(app)
ReactDom.render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
	document.getElementById("app")
)
