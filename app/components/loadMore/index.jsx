import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class LoadMore extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.loadMoreClick = this.loadMoreClick.bind(this)
	}
	render(){
		return (
			<div className="loadMoreWrap" ref="wrapper">	
				{
					this.props.isLoadMore ?
					<span>加载中...</span> :
					<span onClick={this.loadMoreClick}>加载更多</span>
				}
			</div>
		)
	}
	//定义跟父级交互函数-(点击加载更多)
	loadMoreClick(){
		this.props.loadMoreHandle()
	}
	componentDidMount(){
		//使用滚动自动加载更多
		const loadMoreFn = this.props.loadMoreHandle
		const wrapper = this.refs.wrapper
		let timer
		function callBack (){
			const top = wrapper.getBoundingClientRect().top
			const windowHeight = window.screen.height
			if(top && top <= windowHeight){
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
			}
		}
		window.addEventListener('scroll', function(){
			if(this.props.isLoadMore){
				return
			}
			if(timer){
				clearTimeout(timer)
			}
			timer = setTimeout(callBack, 50)
		}.bind(this), false)
	}
}

export default LoadMore