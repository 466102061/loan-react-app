import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.css'

class Push extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
		this.state={

		}
	}
	render(){
		return (
			<div className="push">
				<span className="pushIco"></span>
				<ul className="list">
					<li>陈欧马可在<Link to="loanDetail">融360</Link>借款<span className="blue">700元</span></li>
					<li>陈欧马可在<Link to="loanDetail">融360</Link>借款<span className="blue">700元</span></li>
				</ul>
			</div>
		)
	}
}

export default Push