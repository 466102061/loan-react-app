import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '../../redux/action/userInfo/userInfo'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import Header from '../../components/header/index.jsx'
import Footer from '../../components/footer/index.jsx'
import { getMyTabs } from '../../fetch/my/tabs'
import Loading from '../../components/loading'
import MyHeader from './containers/myHeader'
import MyTabs from './containers/myTabs'
import Ewm from './containers/ewm'

class My extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			tabs : [],
			phoneNumber : ''
		}
	}
	render(){
		return (
			<div>
				{
					this.state.tabs.length ?
					<div className="mbody">
						<Header title={"应急钱包"} />
						<MyHeader phoneNumber={this.state.phoneNumber} />
						<MyTabs data = {this.state.tabs} />
						<Ewm />
						<Footer index='3' />
					</div> :
					<Loading />
				}
			</div>
		)
	}
	componentDidMount(){
		const result = getMyTabs()
		result.then(res =>{
			return res.json()
		}).then(json => {
			const tabs = json
			//关闭加载
			this.setState({
				tabs : tabs,
				phoneNumber : this.props.userInfo.phone
			})
		}).catch(ex =>{
			if(__DEV__){
				console.log('我的页面，tab列表数据加载失败')
			}
		})
	}
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
    	userInfo : state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoAction: bindActionCreators(userInfoActions, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(My)