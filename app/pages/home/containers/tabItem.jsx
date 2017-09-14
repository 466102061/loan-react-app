import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.css'

class TabItem extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
		this.state = {
			tabs : [
					{id : 'tab_xe', ico : require('../../../static/img/tab_xe.png') ,title : '小额极速贷'},
					{id : 'tab_tb',ico : require('../../../static/img/tab_tb.png'),title : '淘宝开心贷'},
					{id : 'tab_xs',ico : require('../../../static/img/tab_xs.png'),title : '学生专享贷'},
					{id : 'tab_sfz',ico : require('../../../static/img/tab_sfz.png'),title : '白户也能贷'},
					{id : 'tab_gx',ico : require('../../../static/img/tab_gx.png'),title : '上班族任性贷'},
					{id : 'tab_xyk',ico : require('../../../static/img/tab_xyk.png'),title : '信用卡代还'},
					{id : 'tab_de',ico : require('../../../static/img/tab_de.png'),title : '土豪大额贷'},
					{id : 'tab_sy',ico : require('../../../static/img/tab_sy.png'),title : '无工作也能贷'},
				]
		}
	}
	render(){		
	   
		const items = this.state.tabs.map((item,index) =>{
			return <li className="tabItem" key={index}>
						<Link to={"/loan/"+item.id}>
							<img src={item.ico} />
							<p>{item.title}</p>
						</Link>
					</li>
		})
		return (
			<ul className="clearfix tabItemWrap">
				{items}
			</ul>
		)
	}
}

export default TabItem