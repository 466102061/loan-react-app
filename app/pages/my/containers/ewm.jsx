import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class Ewm extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return (
			<div className="ewm">
			    <img src={require('../../../static/img/yjqb.png')} />
			    <p>应急钱包</p>
			    <p style={{'color':'#4b9fff'}}>(yjqb007)</p>
			    <p style={{'color':'#898989','fontSize':'10px'}}>关注微信公众号</p>
			</div>
		)
	}
}

export default Ewm