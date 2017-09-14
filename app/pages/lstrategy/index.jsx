import React from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/header'
import './style.css'

class Lstrategy extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return (
			<div className="mbody">
				<Header title="应急钱包" route="back" />
				<div className="wrap">
			      <img className="img" src={require("../../static/img/lstrategy.png")} />
			      <div className="btnls"><Link to="/loan">立即贷款</Link></div>
			    </div>
			</div>
		)
	}
}

export default Lstrategy