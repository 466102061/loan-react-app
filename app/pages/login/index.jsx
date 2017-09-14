import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '../../redux/action/userInfo/userInfo'
import { hashHistory } from 'react-router'
import Header from '../../components/header'
import './style.css'

class Login extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.getCode = this.getCode.bind(this)
		this.login = this.login.bind(this)
		this.countDown = this.countDown.bind(this)
		this.state = {
			hide : true,
			msg : ''
		}
	}
	render(){
		const Style = {}
		this.state.hide ?
		Style.msg={
			'display' : 'none'
		}
		:
		Style.msg = {
			'display' : 'block'
		}
		return (
			<div className="mbody">
				<Header title={"应急钱包"} route="back" />
				<div className="loginHeader"><img src={require("../../static/img/l.png")} /></div>
				<ul className="loginForm">
			          <li className="loginItem">
			              <label className="loginLabel">手机号</label>
			              <input type="text" placeholder="请填写手机号" ref="phone" className="loginInput" />
			          </li>
			          <li className="loginItem">
			              <label className="loginLabel">验证码</label>
			              <input type="text" placeholder="请输入验证码" ref="code" className="loginInput" />
			              <span className="btnGetLoignCode" ref="getCode" data-disable="false" onClick={this.getCode}>获取验证码</span>
			          </li>
			    </ul>
			    <div className="loginBtnWrap">
		        	<span className="loginBtn anchorHref" onClick={this.login}>登录</span>
		        </div>
		      <p className="erorMsg" style={Style.msg}>{this.state.msg}</p>
			</div>
		)
	}
	componentDidMount(){

	}
	getCode(){
		const flag = this.refs.getCode.getAttribute("data-disable")
		if(flag == 'true'){
		  return
		}
		const reg = /^1(3|4|5|7|8)\d{9}$/
		const phone = this.refs.phone.value
		if(!phone){
			this.setState({
				hide : false,
				msg : '请输入手机号码！'
			})
		}else if(!reg.test(phone)){
			this.setState({
				hide : false,
				msg : '手机号码有误！'
			})
		}else{
			this.setState({
				hide : true
			})
			this.countDown()
		}
	}
	login(){
		const code = this.refs.code.value
		const reg = /^1(3|4|5|7|8)\d{9}$/
		const phone = this.refs.phone.value
		if(!phone){
			this.setState({
				hide : false,
				msg : '请输入手机号码！'
			})
		}else if(!reg.test(phone)){
			this.setState({
				hide : false,
				msg : '手机号码有误！'
			})
		}else if(!code){
			this.setState({
				hide : false,
				msg : '请输入验证码！'
			})
		}else{
			this.setState({
				hide : true,
				btnGetCode : true
			})
			const data = {
				phone : phone
			}
			this.props.userInfoAction.updata(data)
			hashHistory.push('/my')
		}
	}
	countDown(){
		let timer = null
		let i = 59
		this.refs.getCode.style.backgroundColor = '#999'
		this.refs.getCode.innerHTML = '60s'
		this.refs.getCode.setAttribute("data-disable","true")
		timer = setInterval(() =>{
			this.refs.getCode.style.backgroundColor = '#999'
			this.refs.getCode.innerHTML = i+'s'
			if(i==0){
				this.refs.getCode.style.backgroundColor = '#539FFF'
			    this.refs.getCode.innerHTML = '获取验证码'
		    	this.refs.getCode.setAttribute("data-disable","false")
				clearInterval(timer)
			}
			i--
		},1000);
	}
}

function mapStateToProps (state){
	return {

	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoAction : bindActionCreators(userInfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)