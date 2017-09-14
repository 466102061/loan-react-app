import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import './style.css'

class Header extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
		this.back = this.back.bind(this)
	}
	render(){
		return (
			<div className="header">
			   <h6 className="cbody">
			   {
				    this.props.route ?
					<span className="backIco" onClick={this.back}></span>
					: ''
				}
				{this.props.title}
			</h6>
			</div>
		)
	}
	back (){
		if(this.props.route == 'back'){
			window.history.go(-1)
		}else{
			hashHistory.push(this.props.route)
		}
	}
}

export default Header