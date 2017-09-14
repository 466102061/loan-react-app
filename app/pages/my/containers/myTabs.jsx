import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.css'

class MyTabs extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		const data = this.props.data
		const tabs = data.map((item, index) => {
			return <li className="myTabItem" key={index}>
			           <Link to={item.link}>
							<img className="ico" src={item.ico} />
							<span>{item.title}</span>
							<span className="arrow"></span>
			            </Link>
				    </li>
		})
		return (
			<ul>
				{tabs}
			</ul>
		)
	}
}

export default MyTabs