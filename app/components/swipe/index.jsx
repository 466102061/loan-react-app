import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Swipe from 'react-swipe'
import { Link } from 'react-router'
import './style.css'

class SwipeAd extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
		this.state = {
			index : 0
		}
	}
	render(){
		const opt = {
			auto : 2500,
			callback : function(index){
				this.setState({
					index : index
				})
			}.bind(this)
		}
		return (
			<div className="banner">
				<Swipe swipeOptions={opt}>
					<div className="swipeItem">
						<Link to="/loanDetail/list_360">
							<img src={require("../../static/img/360.gif")} />
						</Link>
					</div>
					<div className="swipeItem">
						<Link to="/loanDetail/list_xef">
							<img src={require("../../static/img/banner.png")} />
						</Link>
					</div>
					<div className="swipeItem">
						<Link to="/loanDetail/list_knd">
							<img src={require("../../static/img/banner_kn.png")} />
						</Link>
					</div>
				</Swipe>
				<ul className="swipeIndex">
					<li className={this.state.index === 0 ? 'cur' : ''}></li>
					<li className={this.state.index === 1 ? 'cur' : ''}></li>
					<li className={this.state.index === 2 ? 'cur' : ''}></li>
				</ul>
			</div>
		)
	}
}

export default SwipeAd