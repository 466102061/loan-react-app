import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/header'
import './style.css'

class MyMsg extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return (
		   <div>
		   <Header title='应急钱包' route='back' />
			<div className="emp_32">
			   <img src={require("../../static/img/e2.png")} className="msg_32" />
			   <p>暂无消息~</p>
			</div>
		  </div>
		)
	}
}

export default MyMsg