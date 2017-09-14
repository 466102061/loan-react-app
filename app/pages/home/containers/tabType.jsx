import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.css'

class TabType extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
		this.state = {
			tabs : [
					{id : 'tab_2000', ico : require('../../../static/img/2000.png') ,title : '2000以下'},
					{id : 'tab_5000',ico : require('../../../static/img/5000.png'),title : '2000-5000'},
					{id : 'tab_10000',ico : require('../../../static/img/10000.png'),title : '5000-10000'},
					{id : 'tab_10000_plus',ico : require('../../../static/img/10000+.png'),title : '10000以上'}
				]
		}
	}
	render(){
		const lines = this.state.tabs.map((item,index) =>{
		 	if(index < this.state.tabs.length){
		 		return <div className="line" key={index}></div>
		 	}
		})
		const items = this.state.tabs.map((item,index) =>{
			return <div className="tabTypeItem" key={index}>
						<Link to={"/loan/"+item.id}>
							<img src={item.ico} />
							<p>{item.title}</p>
						</Link>
					</div>
		})
		return (
			<div className="tabType">
				{lines}
				{items}
			</div>
		)
	}
}

export default TabType