import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//路由按需加载,提高性能

const App = (location, cb)=>{
	require.ensure([], require => {
		cb(null, require('../pages/index').default)
	}, 'App')
}

const Home = (location, cb) =>{
	require.ensure([], require => {
		cb(null, require('../pages/home').default)
	}, 'Home')
}

const My =  (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/my').default)
	}, 'My')
}

const Login = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/login').default)
	}, 'Login')
}

const QAQ = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/qaq').default)
	}, 'QAQ')
}

const MyMsg = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/myMsg').default)
	}, 'MyMsg')
}

const LoanList = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/loan').default)
	}, 'LoanList')
}

const LoanDetail = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/loanDetail').default)
	}, 'LoanDetail')
}

const HotInfo = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/hotInfo').default)
	}, 'HotInfo')
}

const HotInfoDetail = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/hotInfoDetail').default)
	}, 'HotInfoDetail')
}

const Tool = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/tool').default)
	}, 'Tool')
}

const Lstrategy = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/lstrategy').default)
	}, 'Lstrategy')
}

const Bstrategy = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/bstrategy').default)
	}, 'Bstrategy')
}

const History = (location, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/history').default)
	}, 'History')
}

const NotFound = (loaction, cb) =>{
	require.ensure([], require=>{
		cb(null, require('../pages/404').default)
	}, 'NotFound')
}

class RouteMap extends React.Component{
	render(){
		return (
			<Router history = {this.props.history}>
				<Route path='/' getComponent={App}>
					<IndexRoute getComponent={Home} />
					<Route path='/my' getComponent={App}>
					   <IndexRoute getComponent={My} />
						<Route path='qaq' getComponent={QAQ} />
						<Route path='myMsg' getComponent={MyMsg} />
						<Route path='dkgl' getComponent={Lstrategy} />
						<Route path='bkgl' getComponent={Bstrategy} />
						<Route path='tool' getComponent={Tool} />
					    <Route path='history' getComponent={History} />
					</Route>
					<Route path='/hotInfo' getComponent={App}>
					   <IndexRoute getComponent={HotInfo} />
						<Route path='detail' getComponent={HotInfoDetail} />
					</Route>
					<Route path='/loan(/:id)' getComponent={LoanList}/>
					<Route path='/login' getComponent={Login} />
					<Route path='/loanDetail/:id' getComponent={LoanDetail} />
					<Route path='*' getComponent={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouteMap