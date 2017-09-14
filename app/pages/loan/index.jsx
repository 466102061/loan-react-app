import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Loading from '../../components/loading'
import Item from '../../components/item'
import Banner from './containers/banner.jsx'
import TabNavs from './containers/tabNav.jsx'
import DataKeys from './containers/dataKeys'
import { getLoanList } from '../../fetch/list/list.js'

const Style = {
	paddingTop:'154px',
	paddingBottom:'60px'
}

class LoanList extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.tabSelected = this.tabSelected.bind(this)
		this.state = {
			tabKey : 'tab_default',
			dataKeys : [],
			data : []
		}
	}
	render(){
		return (
			<div>
			{
				this.state.dataKeys.length ? 
				<div style={{paddingTop:'148px',paddingBottom:'52px'}}>
					<Header title='应急钱包' />
					<Banner />
					<TabNavs onSelectedTab={this.tabSelected} tabKey={this.state.tabKey} />
					{
					    this.state.dataKeys.map((res,index)=>{
					    	switch(index){
					    		case  0 :
					    		  return <Item key={index} item={this.state.data[res]} id={res} flag='../../static/img/hot.png' />
					    		case  1 :
					    		  return <Item key={index} item={this.state.data[res]} id={res} flag='../../static/img/tui.png' />
					    		default:
							       return <Item key={index} item={this.state.data[res]} id={res} />
					    	}
						})
					}
					<Footer index='1' />
				</div> :
				<Loading />
			}
			</div>
		)
	}
	//定义子集向父级回传参数函数
	tabSelected(key){
		this.setState({
			tabKey :  key,
			dataKeys : DataKeys[key]
		})
		//console.log(this.state.dataKeys)
	}
	componentDidMount(){
		const result = getLoanList()
		result.then(res=>{
			return res.json()
		}).then(json=>{
			let tabKey = 'tab_default'
			if(this.props.params.id){
				tabKey = this.props.params.id
			}
			this.setState({
				tabKey : tabKey,
				dataKeys : DataKeys[tabKey],
				data : json
			})
		}).catch(ex=>{
			if(__DEV__){
				console.error('贷款数据源获取失败！'+ex.message)
			}
		})
	}
}

export default LoanList