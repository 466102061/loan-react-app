import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getQaqList } from '../../fetch/qaq/list'
import Loading from '../../components/loading/index'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './style.css'

class QAQ extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			loading : true,
			data : []
		}
	}
	render(){
		const items = this.state.data.map((item,index) => {
			return <li className="qaqItem" key={index}>
			          <span className="qaqArrow"></span>
			          <p className="quest">{parseInt(index+1)+'.'+item.quest}</p>
			          <div className="answer">{item.answer}</div>
			        </li>
		})
		return (
			this.state.loading ?
			<Loading />
			:
			<div className="mbody">
				<Header title={"应急钱包"} route={"back"} />
				<ul id="list">
					{items}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		const result = getQaqList()
		result.then(res => {
			return res.json()
		}).then(json =>{
			this.setState({
				data : json,
				loading : false
			})			
		}).catch(ex =>{
			console.log('error')
			if(__DEV__){
				console.log('常见问题数据加载失败！'+ex.message)
			}
		})
	    console.log(__DEV__)
		//绑定事件
		$(document).on("click","#list .qaqItem",function(){
			if($(this).find(".answer").is(":hidden")){
				$(this).find(".answer").slideDown()
				$(this).find(".qaqArrow").addClass("cur")
			}else{
				$(this).find(".answer").slideUp()
				$(this).find(".qaqArrow").removeClass("cur")
			}
		})
	}
}

export default QAQ