import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class Banner extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render (){
		return (
			<div className="loanBanner">
				<img src={require('../../../static/img/dbanner.png')} />
			</div>
		)
	}
}

export default Banner