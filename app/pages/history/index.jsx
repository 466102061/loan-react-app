import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/header'
import Loading from '../../components/loading'
import Item from '../../components/item'
import LoadMore from '../../components/loadmore'
import { getLoanList } from '../../fetch/list/list'
import { getHistoryData } from '../../fetch/history'
import './style.css'

class History extends React.Component{
	constructor(props, context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.loadMoreData = this.loadMoreData.bind(this)
		this.initFrameWithData = this.initFrameWithData.bind(this)
		this.state ={
			hasMore : false,
			isLoadMore : false,
			keys : [],
			data : []
		}
	}
	render (){
		return (
			<div>
			{
				this.state.keys.length ?
				<div style={{paddingTop:'46px'}}>
					<Header title={'应急钱包'} route='back' />
					{
						this.state.keys.map((res,index) => {
							return <Item key={index} item={this.state.data[res]} id={res} />
						})
					}
					{
						this.state.hasMore ? 
						<LoadMore isLoadMore={this.state.isLoadMore} loadMoreHandle={this.loadMoreData} /> : ''
					}
				</div> :
				<Loading />
			}
			</div>
		)
	}
	componentDidMount(){
		//加载数据源
		const result = getLoanList()
		result.then(res=>{
			return res.json()
		}).then(json=>{
			this.setState({
				loading : false,
				data : json
			})
			//加载第1版数据
			this.initFrameWithData()
		}).catch(ex=>{
			if(__DEV__){
				console.error('浏览历史数据源加载失败!'+ex.message)
			}
		})
	}
	initFrameWithData(){
		const res = getHistoryData()
		this.resultHandle(res)
	}
	loadMoreData(){
		//设置正在加载
		this.setState({
			isLoadMore : true
		})
		//加载下一页数据
		const res = getHistoryData()
		this.resultHandle(res)

		//加载完数据，设置数据状态
		this.setState({
			isLoadMore : false,
			page : this.state.page + 1
		})
	}
	//数据处理
	resultHandle(result){
		result.then(res=>{
			return res.json()
		}).then(json=>{
			this.setState({
				hasMore : json.hasMore,
				keys : this.state.keys.concat(json.data)
			})
		}).catch(ex=>{
			if(__DEV__){
				console.error('浏览历史数据源加载失败!'+ex.message)
			}
		})
	}
}

export default History