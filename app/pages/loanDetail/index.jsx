import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/header'
import Loading from '../../components/loading'
import { getLoanList } from '../../fetch/list/list'
import './style.css'

class LoanDetail extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			loading : true,
			id:'',
			data : []
		}
	}
	render (){
		let item = {}
		this.state.id ? item=this.state.data[this.state.id] : ''
		return (
			<div>
				{
					this.state.loading ? <Loading /> :
					<div className="mbody">
						<Header title='应急钱包' route='back' />
						<div className="loanDetailTop">
						    <img className="loanLogo" src={item.ico} />
						    <span className="loanDetailName">{item.title}</span>
						    <span className="loanDetailBase">申请人数：{item.base}</span>
						    <div className="loanDetailPan">
						    	{
						    		item.require.map((res,index) => {
						    			return <span key={index}>{res}</span>
						    		})
						    	}
						    </div>
						</div>
						<div className="dLine"></div>
						<ul className="loanDetailMsg">
							<li>
								<p className="title">贷款金融</p>
								<p className="desc">{item.amount}</p>
							</li>
							<li>
								<p className="title">贷款期限</p>
								<p className="desc">{item.date}</p>
							</li>
							<li>
								<p className="title">贷款利率</p>
								<p className="desc">{item.rate}</p>
							</li>
						</ul>
						<div className="loanDetailContent">
							<div className="block">
								<h4 className="title"><span className="ico"></span>申请条件</h4>
								<div className="desc" dangerouslySetInnerHTML={{__html:item.condition}}></div>
								<div className="l_line"></div>
							</div>
							<div className="block">
								<h4 className="title"><span className="ico"></span>申请材料</h4>
								<div className="desc" dangerouslySetInnerHTML={{__html:item.infos}}></div>
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
	componentDidMount(){
		const result = getLoanList()
		result.then(res=>{
			return res.json()
		}).then(json=>{
			console.log(this.props.params.id)
			this.setState({
				loading : false,
				id : this.props.params.id,
				data : json
			})
		}).catch(ex=>{
			if(__DEV__){
				console.error('贷款详情数据源获取失败!'+ex.message)
			}
		})
	}
}

export default LoanDetail