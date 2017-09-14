import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import './style.css'

class MyHeader extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.login = this.login.bind(this)
		this.state = {
			login : false
		}
	}
	login(){
		if(this.state.login) return
		hashHistory.push('/login')
	}
	render(){
		return (
			<div className="myHeader" onClick={this.login}>
				<img src={require('../../../static/img/bg.png')} className="bg" />
				{
					this.props.phoneNumber ?
					<div className="userInfo">
						<span className="userIco login"></span>
						<p className="userDesc">{this.props.phoneNumber}</p>
					</div>
					:
					<div className="userInfo">
						<span className="userIco"></span>
						<p className="userDesc">未登录</p>
					</div>
				}
			</div>
		)
	}
	componentDidMount(){
		if(this.props.phoneNumber){
			this.setState({
				login : true
			})
		}
	}
}

export default MyHeader