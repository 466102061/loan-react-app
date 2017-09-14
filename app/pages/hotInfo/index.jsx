import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Finance from './containers/finance'
import Loading from '../../components/loading'
import Hot from './containers/hot'
import Loan from './containers/Loan'
import Other from './containers/other'

class HotInfo extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			loading: true,
			tabId : 1,
			tabType : "HOT",
			tabs : [
				{tabName:"热点",id:1,type:"HOT"},
				{tabName:"理财",id:2,type:"FINANCE"},
				{tabName:"贷款",id:3,type:"LOAN"},
				{tabName:"其他",id:4,type:"OTHER"}
			]
		}
	}
	tabClicked(id,type){
		this.setState({
			tabId:id,
			tabType:type
		})
	}
	render(){
		const active = {
			opacity:"1",
			borderBottom:"3px solid #333"
		}
		const normal = {
			opacity:"0.5",
			borderBottom:"none"
		}
		let tabBody = ""
		const tablist = this.state.tabs.map((item,index) =>{
			let myStyle = normal
			if(item.id == this.state.tabId){
				myStyle = active
			}
			if(this.state.tabId == 1){
				tabBody = <Hot />
			}else if(this.state.tabId == 2){
				tabBody = <Finance />
			}else if(this.state.tabId == 3){
				tabBody = <Loan />
			}else if(this.state.tabId == 4){
				tabBody = <Other />
			}
			return <li key={item.id} className="navItems">
						 <span className="navItemsHref" onClick={this.tabClicked.bind(this,item.id,item.type)} style={myStyle}>{item.tabName}</span>
					 </li>
		})
		return (
			<div>
				{
					this.state.loading ? <Loading /> :
					<div className="mbody">
						<Header title='应急钱包' />
						 <ul className="navWrap">
						 	{tablist}
						 </ul>
						 {tabBody}
						<Footer index='2' />
					</div>
				}
			</div>
		)
	}
	componentDidMount(){
		this.setState({
			loading : false
		})
	}
}

export default HotInfo