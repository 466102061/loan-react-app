import React from 'react'
import Header from '../../components/header'

const style = {};
style.content={
	padding:"15px 30px"
}
style.title = {
	fontSize: "20px",
    color: "#383a3e",
    lineHeight: "28px",
    fontWeight: "normal"
}
style.dataCount={
	position: "relative",
    fontSize: "15px",
    height: "20px",
    lineHeight: "20px",
    color: "#8e8e8e",
    textAlign: "right",
    marginTop: "10px",
    marginBottom: "20px"
}
style.pushTime = {
	position: "absolute",
    left: "0",
    top: "0"
}
style.readCount = {
}
style.des = {
	fontSize: "14px",
    color: "#8e8e8e",
    lineHeight: "20px",
    marginBottom: "20px"
}
style.subTitle = {
	color: "#3a3a3a",
    fontSize: "16px",
    fontWeight: "normal",
    marginBottom: "10px"
}

class HotInfoDetail extends React.Component{
	render(){
		return(
		    <div className='mbody'>
			<Header title={"应急钱包"} route="back" />
			<div style={style.content}>						
				<h4 style={style.title}>消费贷款有哪些坑？借钱背后竟藏有这些陷阱！</h4>
				<p style={style.dataCount}><span style={style.pushTime}>2016-8-1</span><span style={style.readCount}>10000人阅读</span></p>
				<div style={style.des}><p>消费贷款，一种在欧美发达国家极其普遍的消费方式，渐年来，也广泛被国人所接受。 没钱装修？没钱买汽车？没钱买手机？甚至没钱结婚？没钱整容？你都可以选择消费贷款。然而，不知道广大的消费者有没有注意到，许多消费贷款产品，在你大肆买买买的背后，竟然藏了许多陷阱，一不小心，你的钱包就会受损！</p></div>
				<h6 style={style.subTitle}>陷阱一：零利率陷阱 </h6>
				<div style={style.des}>
					<p>南阳晚报报道，市民常先生在4S店看中一款商务车，售价20多万，当时店里在做零利率分期付款买车的活动，常先生以为零利率就是没有利息，非常心动，当即拍板，付了三成的首付，就签了购车合同。</p>
					<p>然而接下来，常先生就惊呆了，销售员让常先生续交8000元的手续费、3000元的续保押金、13000元的保证金等各式费用共2.6万元。常先生反悔说不想买了，但销售员说毁约可以，那就交10000元的违约金啊！常先生这才知道，自己掉入了商家零利率的陷阱。 </p>
					<p>点评：零利率和零利息，虽然一字之差，但相去甚远，办理贷款之前，一定要问清楚总共需要支付的总利息金额。</p>
				</div>
				<h6 style={style.subTitle}>陷阱二：逾期按全额罚息陷阱 </h6>
				<div style={style.des}>
					<p>喜欢购物的网友，一定使用过信用卡、花呗或是京东白条等先消费后付款的服务。一边买买买，一边享受一个多月的免息期，看起来真是很美好。然而，一旦不小心逾期，麻烦就找上门来了。以花呗或是京东白条为例，它们的罚息规则是：逾期费用=逾期金额*逾期天数*0.05%；信用卡的罚息利息虽然也是每日万分之五，然而却是全额收取。</p>
					<p>举个例子，小明在花呗、京东白条、信用卡各消费10000元，分10期偿还，每期还款额为1000元，结果不小心，在最后一期时，小明在三个平台上面都逾期了，逾期天数是30天，那么他的逾期利息怎么算呢：</p>
					<p>花呗、京东白条：1000*30*0.05%=15元 </p>
					<p>信用卡：10000*30*0.05%=150元 </p>
					<p>点评：这样对比，就看出门道来了吧，全额罚息是一件多么可怕的事？最好的办法，除了不要逾期以外，小编还是建议你签约之前，看清协议。</p>
				</div>
				<h6 style={style.subTitle}>　陷阱三：高昂违约金陷阱 </h6>
				<div style={style.des}>
					<p>南方日报报道，市民杨先生被推销，选中了一套价格为29800元的英语课程，对方推荐首付+分期的方式，杨先生交完1500元的首付就开始听课了。</p>
					<p>但是上完一节课以后，杨先生对听课的效果不满意，想要退款。培训班的老师这这个时候才告知杨先生如果现在退出培训课程，就要缴纳总计6800元的费用，杨先生非常不解，为什么就上了一节课，就得蒙受如此大的损失。 </p>
					<p>点评：违约金陷阱的产生，多是借款人填写合同之时，没有仔细阅读规则或是没有询问清楚，平台或是销售员抓住用户这个特点，很容易就让你上套了。所以签合同之前，一定要多留个心眼。 </p>
				</div>
				</div>
			</div>
		)
	}
}

export default HotInfoDetail;