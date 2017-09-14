import React from 'react'
import Header from '../../components/header'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class Bstrategy extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return (
			<div className="mbody">
				<Header title="应急钱包" route="back" />
				<div className="bsbody">
				     <h4 className="bsHeader">教你如何快速申请高额信用卡</h4>
				     <h6 className="subT">导读</h6>
				     <div className="desc">
				     	<p>智能手机与信用卡都已经成为许多人的必备工具，吃饭、购物、娱乐都是必不可少的，那么如何用手机申请信用卡呢？怎样才能在最短时间内成功的申请高额信用卡呢？</p>
				     </div>
				     <h6 className="subT">一、证件齐全且有分量</h6>
				     <div className="desc">
				     	<p>对于老手来说，如果你要申请一张信用卡，提供齐全的证明会为你申请信用卡增色不少，也更加容易。如果您已经拥有了一张或更多的信用卡，并且还款记录良好，那么一般不需要再提供收入或资产证明了，只需在申请时将已经拥有的信用卡复印，随申请表寄出即可(即使您拥有的信用卡不是申请银行的卡也可以，这是比较容易的一个流程。你只要注意，一个良好的消费信用和还款信用是你申请高额信用卡的关键。</p>
				        <p>对于白户来讲，你就是一张白纸，想要申请高额信用卡可能有些困难。那么银行看什么呢?您的各种收入资产状况决定是否给您批卡以及信用额度的大小。这个很简单，你可以提供一份有分量的资产证明
				，如收入证明、房屋产权证明、按揭购房证明、汽车产权证明、银行存款证明或有价证券凭证等。其次，你的工作单位，个人能力，应聘经历等其他一些能证明您个人能力的证书也会帮助您获得高额度
				的信用卡，如学历证书、技术等级证书以及其他资格证书。</p>
				     </div>
				     <h6 className="subT">二、申请表格填写加分项</h6>
				     <div className="desc">
				     	<p>填写申请表格对于高额信用卡申请还是有益处的。以下几个方面会影响银行对您的信用评估得分，想要信用卡审批的几率高，额度高，那么一定从以下几个方面入手。</p>
				        <p>1.固定电话高过无固定电话;</p>
				        <p>2.已婚得分高过未婚;</p>
				        <p>3.本市户口胜过外地户口;</p>
				        <p>4.有房一族高过无房一族;</p>
				        <p>5.学历越高，银行信任度更大;</p>
				        <p>6.机关事业单位、国企、世界500强高过普通私企;</p>
				        <p>7.职务情况(职务越高，得分越高。如公务员、公司管理人员得分要比普通职员要高)。</p>
				        <p>对于白户来说，首次申请信用卡的时候一定要填写清楚上面的加分项，这样能够增加银行对你的信任度，而你申请到高额信用卡的可能性也更大些。</p>
				     </div>
				     <h6 className="subT">三、提高使用频率</h6>
				     <div className="desc">
				     	<p>记住，银行不会为一个开卡后从来不用卡或是非常非常偶尔才用卡的人提高额度。如果你属于这一类，请问你要信用卡来干嘛？申请提额又是肿么个意思？如果你很希望信用卡额度能高一点，那么请你频繁使用，不管大额、小额，都养成刷卡习惯。</p>
				     </div>
				     <h6 className="subT">四、临时额度提高很方便</h6>
				     <div className="desc">
				     	<p>信用额度并不是越高越好，要与个人经济能力相匹配。如果临时有大额需求，比如购买家电、出国旅行、装修等等，提不了固定额度就提高临时额度呗。别死心眼只想着提高固定额度，没准额度高了，反而带坏你的消费习惯，
				大手大脚花钱。</p>
				     </div>
				</div>
			</div>
		)
	}
}

export default Bstrategy