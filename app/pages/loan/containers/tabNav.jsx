import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TabInfo from './tabInfo.js'
import './style.css'

class TabNav extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.closeTabNav = this.closeTabNav.bind(this)
		this.state = {
			navId : '',//控制tab标题显示
			navType:'',//判断是否再次点击tab，二次点击切换显示、隐藏navs选项
			navArrow:'',//控制arrow方向
			NavTitle : '',//tab标题
			isShowNavItem : false,//切换显示、隐藏navs选项
			navs : [
				{id : 2,type : 'navMoney', ico : require('../../../static/img/g1.png'),title : '金额不限'},
				{id : 1, type : 'navType', ico : require('../../../static/img/g2.png'),title : '类型不限'}
			],
			items : {
				'navMoney' : [
					'tab_2000',
					'tab_5000',
					'tab_10000',
					'tab_10000_plus'
				],
				'navType' : [
					'tab_xe',
					'tab_gx',
					'tab_de',
					'tab_sfz',
					'tab_tb',
					'tab_xs',
					'tab_xyk',
					'tab_sy'
				]
			}
		}
	}
	render (){
		//选项卡tab
		const tabNavs = this.state.navs.map((item,index) => {
			let title =''
			let arrowClass = ''
			if(item.id == this.state.navId){
				title = this.state.NavTitle
			}else{
				title = item.title
			}
			if(item.id == this.state.navArrow){
				arrowClass = 'laonNavArrow cur'
			}else{
				arrowClass = 'laonNavArrow'
			}
			return <li className="loanNavItem" key={index}>
			          <div className="loanNavIner" onClick={this.navClick.bind(this,item.id,item.type,item.title)}>
			          <img src={item.ico} className="loanNavIco" />
			          <span className="loanNavTitle">{title}</span>
			          <span className={arrowClass}></span>
			          </div>
			        </li>
		})
		let navItems = ''
		this.state.navType ? 
	    navItems = this.state.items[this.state.navType].map((item,index) =>{
	    	let spanClass = ''
	    	if(this.state.NavTitle == TabInfo[item].name){
	    		spanClass="cur"
	    	}
	    	return <li key={index}>
	    	            <span className={spanClass} onClick={this.choiceTabNav.bind(this,TabInfo[item].id,TabInfo[item].name,item)}>{TabInfo[item].name}</span>
	    	        </li>
	    }) : ''
		return (
			<div>
				<div className="loanNavWrap">
				    <ul>
				    	{tabNavs}
				    </ul>
				</div>
				{
					this.state.isShowNavItem ?
					<div className="maskLoanNav">
						<div className="maskLoanBg" onClick={this.closeTabNav}></div>
						<div className="maskLoanBody">
							<ul className="maskLoanItem clearfix">
							   {navItems}
							</ul>
						</div>
					</div> : ''
				}
			</div>
		)
	}
	navClick (id,type,title){
		let NavTitle =this.state.NavTitle
		let isShow = this.state.isShowNavItem
		let navId = this.state.navId
		let navType = this.state.navType
		let navArrow = this.state.navArrow
		if(!NavTitle || NavTitle == '金额不限' || NavTitle == '类型不限'){
			NavTitle = title
		}
		if(navType == type && isShow){//点击的tab同上一次一样
			isShow = false
			navArrow = ''
		}else{
			isShow = true
			navArrow = id
		}
		this.setState({
			navType : type,
			navArrow : navArrow,
			NavTitle : NavTitle,
			isShowNavItem : isShow
		})
	}
	closeTabNav(){
		this.setState({
			navArrow : '',
			isShowNavItem : false
		})
	}
	choiceTabNav(id,item,key){
		console.log(id+','+item+','+key)
		this.setState({
			navId : id,
			NavTitle : item,
			navArrow : '',
			isShowNavItem : false
		})
		//把选中的tab值，回传给父组件
		this.props.onSelectedTab(key)
	}
	componentDidMount(){
		this.setState({
			navId : TabInfo[this.props.tabKey].id,
			NavTitle : TabInfo[this.props.tabKey].name,
		})
	}
}

export default TabNav