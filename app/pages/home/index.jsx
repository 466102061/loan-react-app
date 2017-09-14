import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActions from '../../redux/action/userInfo/userInfo.js'
import  LocalStore from '../../util/localStore'
import  SessionStore from '../../util/sessionStore'
import Header from '../../components/header/index.jsx'
import Footer from '../../components/footer/index.jsx'
import SwipeAd from '../../components/swipe/index.jsx'
import Loading from '../../components/loading'
import TabBanner from './containers/tabBanner.jsx'
import Push from './containers/push'
import TabItem from './containers/tabItem'
import TabType from './containers/tabType'

let Style = {}
Style.tips={
	"height": "14px",
    "textAlign": "center"
}
Style.tipImg={
    "display": "inline-block",
    "width": "225px",
    "height": "14px",
    "backgroundSize": "225px 14px"
}

class Home extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			loading : true
		}
	}
	render(){
		return (
		    <div>
		    	{
		    	this.state.loading ? <Loading /> :
				<div className="mbody">
				    <Header title={"应急钱包"} />
				    <SwipeAd />
				    <TabBanner />
				    <Push />
				    <TabItem />
				    <div style={Style.tips}><img style={Style.tipImg} src={require("../../static/img/bar.png")} /></div>
				    <TabType />
				    <Footer index="0" />
				</div>
				}
			</div>
		)
	}
	componentDidMount(){
		this.setState({
			loading : false
		})
	}
}

//----------------redux react 绑定-------------------

function mapStateToProps(state){
	return {
		userInfo : state.userInfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		action : bindActionCreators(userInfoActions, dispatch)
	}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)