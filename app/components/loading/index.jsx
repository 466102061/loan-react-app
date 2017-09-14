import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
class Loading extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return (
			<div className="maskLoading">
				<div className="loadingWrap">
					<div className="loading"><img src={require("../../static/img/loading.png")} /></div>
					<p>加载中</p>
				</div>
			</div>
		)
	}
}

export default Loading