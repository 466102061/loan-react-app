import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.css'

class TabBanner extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
	}
	render(){
		return (
			<div className="clearfix tabBannerBlock">
				<div className="tabBanner">
					<Link to="/loanDetail/list_hd">
						<img src={require("../../../static/img/tab1.png")} />
					</Link>
				</div>
				<div className="tabBanner">
					<Link to="/loanDetail/list_knd">
						<img src={require("../../../static/img/tab2.png")} />
					</Link>
				</div>
			</div>
		)
	}
}

export default TabBanner