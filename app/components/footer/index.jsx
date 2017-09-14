import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.css'

class Footer extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
		this.state = {
			navs : [
					{ico : 'tabIco1',link : '/',title : '首页'},
					{ico : 'tabIco2',link : '/loan',title : '贷款'},
					{ico : 'tabIco3',link : '/hotInfo',title : '资讯'},
					{ico : 'tabIco4',link : '/my',title : '我的'}
			]
		}
	}
	render(){
		const navItems = this.state.navs.map((item, index) =>{
		    let curClass = this.props.index == index ? 'cur' : ''
			return <li className={"tabItem "+curClass} key = {index}>
			           <Link to={item.link}>
			            <div className="tabIcoWrap"><span className={"tabIco  "+item.ico}></span></div>
			            <p className="tabTitle">{item.title}</p>
			            </Link>
			        </li>
		})
		return (
				<div className="footer">
				    <ul className="tabNav cbody clearfix">
				    	{navItems}
				    </ul>
				</div>
		)
	}
}

export default Footer